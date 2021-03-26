import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
  baseURL: 'https://movieflix-jp.herokuapp.com',
  //baseURL: 'http://localhost:8081',
});

export const TOKEN = 'Basic bW92aWVmbGl4Om1vdmllZmxpeDIwMjE=';

export async function userToken() {
  const token = await AsyncStorage.getItem('@token');
  return token;
}

export async function getMovies() {
  const authToken = await userToken();
  const response = api.get(`/movies`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response;
}

export async function getMoviesByGenre(id: number) {
  const authToken = await userToken();
  const response = api.get(`/movies?genreId=${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response;
}

export async function getMoviesById(id: number) {
  const authToken = await userToken();
  const response = api.get(`/movies/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response;
}

export async function saveAvaliation(data: object) {
  const authToken = await userToken();

  const response = api.post(`/reviews`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response;
}
export async function getGenres() {
  const authToken = await userToken();
  const response = api.get(`/genres`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response;
}
