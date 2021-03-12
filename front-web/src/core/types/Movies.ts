export type MoviesResponse = {
  content: Movies[];
  totalPages: number;
};

export type Movies = {
  id: number;
  title: string;
  subtitle: string;
  year: number;
  imgUrl: string;
  synopsis: string;
  genres: Genre[];
};

export type Genre = {
  id: number;
  name: string;
};
