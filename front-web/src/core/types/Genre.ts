export type GenresResponse = {
  content: Genre[];
  totalPages: number;
};

export type Genre = {
  id: number;
  name: string;
};
