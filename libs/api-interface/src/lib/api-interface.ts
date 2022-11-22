export interface ApiResponse {
    id: number;  
    title: string;
    category: string;
    description: string;
    price: number;
    rating?: object;
    image: string;
  
}

export const API_URL = '/api/products';
