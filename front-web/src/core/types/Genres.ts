export type GenresResponse = {
  content: Genres[];
  totalPages: number;
};

export type Genres = {
  id: number;
  name: string;
};
