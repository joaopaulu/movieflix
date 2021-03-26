import React, { useEffect, useState } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { theme, text, detailsMovie } from '../styles';
import { useNavigation } from '@react-navigation/native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { getMoviesById } from '../services';

import star from '../assets/star.png';

const DetailsMovie = ({
  route: {
    params: { id },
  },
}) => {
  const navigation = useNavigation();
  const [userFetchData, setUserFetchData] = useState({});
  const [loading, setLoading] = useState(false);

  const [movie, setMovie] = useState({
    id: 0,
    title: null,
    subTitle: null,
    year: null,
    imgUrl: null,
    synopsis: null,
    reviews: [
      {
        id: null,
        text: null,
        user: [
          {
            id: null,
            name: null,
          },
        ],
      },
    ],
  });

  const [userAvaliation, setUserAvaliation] = useState({
    movieId: 0,
    text: '',
  });

  async function loadMovieData() {
    const res = await getMoviesById(id);
    setMovie(res.data);
    setLoading(false);
  }
  async function handlerAvaliation(moveId: number) {}

  useEffect(() => {
    loadMovieData();
  });
  return (
    <View style={theme.container}>
      <View style={theme.card}>
        <ScrollView>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <View style={detailsMovie.contentMovie}>
              <Text style={text.titleDetails}>{movie.title}</Text>
              <Image
                source={{ uri: movie.imgUrl }}
                style={detailsMovie.image}
              />
              <Text style={text.yearDetails}>{movie.year}</Text>
              <Text style={text.descriptionDetails}>{movie.subTitle}</Text>
              <Text style={text.titleSinopseDetails}>Sinopse</Text>
              <ScrollView style={detailsMovie.sinopse}>
                <Text style={text.sinopse}>{movie.synopsis}</Text>
              </ScrollView>
            </View>
          )}
          <View style={detailsMovie.contentAvaliation}>
            <TextInput
              style={detailsMovie.avaliation}
              placeholder="Deixe sua avaliação aqui"
              multiline={true}
              value={userAvaliation.text}
              onChangeText={e => {
                const newUserAvaliation = { ...userAvaliation };
                newUserAvaliation.text = e;
                setUserAvaliation(newUserAvaliation);
              }}
            />

            <TextInput
              style={{ display: 'none' }}
              value={(userAvaliation.movieId = movie.id)}
            ></TextInput>
            <TouchableOpacity
              style={detailsMovie.btnAvaliation}
              onPress={handlerAvaliation}
            >
              <Text style={text.btnAvaliation}>SALVAR AVALIAÇÃO</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={detailsMovie.contentComment}>
            <Text style={text.titleComment}>Avaliações</Text>
            {movie.reviews.map(review => (
              <>
                <View style={detailsMovie.contentName} key={review.id}>
                  <Image style={detailsMovie.star} source={star} />
                  <Text style={text.nameComment}>{review.user.name}</Text>
                </View>
                <View style={detailsMovie.inputComment}>
                  <Text style={text.comment}>{review.text}</Text>
                </View>
              </>
            ))}
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailsMovie;
