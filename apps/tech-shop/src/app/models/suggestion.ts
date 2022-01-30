export interface Suggestion {
  feedbacksCount: number;
  images: { source: string; url: string }[];
  name: string;
  price: number;
  rating: number;
  status: number;
  subCategory: string;
  _id: string;
}
