export interface Category {
  name: string;
  _id: string;
  subCategories: { category: string; name: string; _id: string }[];
}
