import React, {useContext} from 'react';
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/modal-context";
import {IProduct} from "../models";
import {Loader} from "../components/loader";
import {ErrorMessage} from "../components/error-message";
import {Product} from "../components/product";
import {Modal} from "../components/modal";
import {CreateProduct} from "../components/create-product";

export function ProductsPage() {
  const {products, error, loading, addProduct} = useProducts();
  const {modal, open, close} = useContext(ModalContext);

  const handleCreateProduct = (product: IProduct) => {
    close();
    addProduct(product);
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      { loading && <Loader /> }
      { error && <ErrorMessage error={ error } /> }
      { products.map(product => <Product product={product} key={product.id} />) }

      { modal && <Modal title="Create new product" onClose={() => close()}>
        <CreateProduct onCreate={handleCreateProduct} />
      </Modal> }

      <button
        className="fixed flex bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={() => open()}
      >
        <span>+</span>
      </button>
    </div>
  );
}
