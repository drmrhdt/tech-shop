export interface ProductDetails {
  brand: string;
  characteristics: {
    title: string;
    items: { name: string; value: string }[];
  }[];
  description: string;
  feedbacks: {
    _id: string;
    advantages: string;
    product: string;
    rate: number;
  }[];
  feedbacksCount: number;
  images: { url: string; source: string }[];
  name: string;
  price: number;
  rating: number;
  status: number;
  subCategory: string;
  _id: string;
}
