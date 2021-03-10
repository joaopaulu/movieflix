export type UsersResponse = {
  content: User[];
  totalPages: number;
};

export type Roles = {
  id: number;
  authority: string;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  roles: Roles[];
};
