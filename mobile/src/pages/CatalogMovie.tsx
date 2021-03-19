import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { theme, text, catalog, loader } from '../styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { getGenres, getMovies } from '../services';
import { MovieCard } from '../components';

import setaDown from '../assets/seta_baixo.png';

type FilterForm = {
  genreId?: number;
};

type Props = {
  onSearch: (filter: FilterForm) => void;
};

const CatalogMovie: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [film, setFilms] = useState([]);
  const [showGenres, setShowGenres] = useState(false);
  const [movie, setMovie] = useState({
    id: null,
    title: null,
    subTitle: null,
    year: null,
    imgUrl: null,
    synopsis: null,
    genre: null,
  });
  const [genres, setGenres] = useState([
    {
      id: null,
      name: null,
    },
  ]);

  const navigation = useNavigation();

  async function fillMovies() {
    setLoading(true);
    const response = await getMovies();
    setFilms(response.data.content);
    setLoading(false);
  }

  async function loadGenres() {
    const response = await getGenres();
    setGenres(response.data);
  }

  useEffect(() => {
    loadGenres();
  }, []);

  useEffect(() => {
    fillMovies();
  }, []);

  return (
    <View style={theme.container}>
      <View style={theme.card}>
        <ScrollView>
          <Modal
            visible={showGenres}
            animationType="fade"
            transparent={true}
            presentationStyle="overFullScreen"
          >
            <View style={catalog.containerModal}>
              <View style={catalog.contentModal}>
                <ScrollView>
                  {genres.map(gen => (
                    <TouchableOpacity
                      key={gen.id}
                      onPress={() => {
                        setMovie({ ...movie, genre: gen.name });
                        setShowGenres(!showGenres);
                      }}
                      style={catalog.itemModal}
                    >
                      <Text style={text.modal}>{gen.name}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>

          <View style={catalog.contentSelect}>
            <TouchableOpacity
              onPress={() => setShowGenres(!showGenres)}
              style={catalog.cardSelect}
            >
              <Text style={text.select}>
                {movie.genre === null ? 'Escolha um Gênero' : movie.genre}
              </Text>
              <Image style={catalog.seta} source={setaDown} />
            </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator style={loader.horizontal} size="large" />
          ) : (
            film.map(movie => <MovieCard {...movie} key={movie.id} />)
          )}
        </ScrollView>
      </View>
      <Text>Catalogo de Filmes</Text>
    </View>
  );
};

export default CatalogMovie;
