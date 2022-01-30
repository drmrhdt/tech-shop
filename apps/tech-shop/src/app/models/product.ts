import { Image } from '.';

export interface Product {
  feedbacksCount: number;
  images: Image[];
  name: string;
  price: number;
  rating: number;
  status: number;
  subCategory: string;
  _id: string;
}
