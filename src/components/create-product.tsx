import React, {ChangeEvent, useState} from 'react';
import {IProduct} from "../models";
import axios from "axios";
import {ErrorMessage} from "./error-message";

const productData: IProduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!value.trim().length) {
      setError('Please enter valid title.');
      return;
    }
    productData.title = value;

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);

    onCreate(response.data);
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={handleChangeValue}
      />

      { error && <ErrorMessage error={error}/> }

      <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:bg-amber-300">Create</button>
    </form>
  );
}
