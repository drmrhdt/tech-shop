export interface ProductDetails {
  brand: string;
  characteristics: {
    title: string;
    items: { name: string; value: string }[];
  }[];
  description: string;
  feedbacks: number;
  feedbacksCount: number;
  images: { url: string; source: string }[];
  name: string;
  price: number;
  rating: number;
  status: number;
  subCategory: string;
  _id: string;
}
