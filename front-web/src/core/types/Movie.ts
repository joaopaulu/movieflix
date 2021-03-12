export type MoviesResponse = {
  content: Movie[];
  totalPages: number;
};

export type Movie = {
  id: number;
  title: string;
  subTitle: string;
  year: number;
  imgUrl: string;
  synopsis: string;
  genres: Genre[];
};

export type Genre = {
  id: number;
  name: string;
};
