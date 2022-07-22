export type Variant = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type Item = {
  id: string;
  name: string;
  description: string;
  variants: Array<Variant>;
  imageUrls: [
    {
      url: string;
    }
  ];
};

export default Item;
