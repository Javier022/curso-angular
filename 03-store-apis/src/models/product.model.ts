export interface ICategory {
  id: number;
  name: string;
}

export interface IProduct {
  id: string;
  title: string;
  images: string[];
  price: number;
  description: string;
  category: ICategory;
}
