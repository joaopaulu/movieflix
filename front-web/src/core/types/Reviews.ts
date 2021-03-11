export type ReviewsResponse = {
  content: Reviews[];
  totalPages: number;
};

export type Reviews = {
  id: number;
  text: string;
};
