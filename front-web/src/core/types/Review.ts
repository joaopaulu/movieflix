export type ReviewsResponse = {
  content: Reviews[];
  totalPages: number;
};

export type Reviews = {
  id: number;
  text: string;
  userId: number;
  movieId: number;
  users: User[];
};

export type User = {
  id: number;
  name: string;
  email: string;
  roles: Roles[];
};

export type Roles = {
  id: number;
  authority: string;
};
