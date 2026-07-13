export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export type ErrorValid<T> = Partial<Record<keyof T, string>>;

export type Validation<T> = {
  isValid: boolean;
  error: ErrorValid<T>;
}

export interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
} 

export interface IBuyer {
  payment: TPayment;
  email: string;
  phone: string;
  address: string;
} 

export type TPayment = 'card' | 'cash' | '';

export type ProdResponse = {
  id: string;
  total: number;
  items: HTMLElement[];
  products: IProduct[];
}

export type prodId = string;

export interface OrderInfo extends IBuyer {
  total?: number;
  items: {
    prodId: string;
    quantity: number;
  }[];
  name: string;
}

export type OrderResponse = {
  id: string;
  total: number;
}

