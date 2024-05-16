export const useCounter = () => useState<number>("counter", () => 0);
export const useColor = () => useState<string>("color", () => "red");

export const useCart = () => useState<any>("cart", () => []);

export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};
