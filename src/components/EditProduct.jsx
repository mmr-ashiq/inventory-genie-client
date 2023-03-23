import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSingleProductApi, updateProductApi } from "../apis/product.apis";
import { useEffect, useState } from "react";
import { useGetSingleProduct } from "../hooks/useProducts";
import { Button } from "@mantine/core";

export const EditProduct = ({ productId }) => {
  const id = productId;
  const queryClient = useQueryClient();

  const { data } = useGetSingleProduct(id);
  const product = data?.product || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productData = Object.fromEntries(formData.entries());

    try {
      await updateProductApi({
        id,
        shopId: product?.shopId,
        data: productData,
      });

      //   invalidate query
      queryClient.invalidateQueries({ queryKey: ["products"] });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={product.name}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            defaultValue={product.price}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            defaultValue={product.description}
          />
        </div>
        {/* <div>
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" />
        </div> */}
        <div>
          <label htmlFor="category">stock</label>
          <input
            type="number"
            name="stock"
            id="stock"
            defaultValue={product.stock}
          />
        </div>
        <div>
          <label htmlFor="category">discount</label>
          <input
            type="number"
            name="discount"
            id="discount"
            defaultValue={product.discount}
          />
        </div>

        <div>
          <Button type="submit" className="bg-blue-500">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
