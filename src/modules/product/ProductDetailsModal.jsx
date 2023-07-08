import { useGetSingleProduct } from './../../hooks/useProducts';

export default function ProductDetailsModal({ productId }) {
  const img =
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
  const { isLoading, data } = useGetSingleProduct(productId);

  const { product } = data || {};
  return (
    <>
      {isLoading && 'Loading'}
      <>
        {typeof product !== 'undefined' && (
          <div>
            <h1>Products Details</h1>
            <img src={img} className="w-64 h-auto inline-block rounded-sm mb-8" alt="" />
            <p>Product Name : {product?.name}</p>
            <p>Product Description : {product?.description}</p>
            <p className="flex">
              Category : <Category data={product?.category} />
            </p>
            <p>Price : {product?.price}</p>
            <p className="flex">
              Variants : <Category data={product?.variants} />
            </p>
            <p>Discount : {product?.discount}</p>
            <p>Stock : {product?.stock}</p>
          </div>
        )}
      </>
    </>
  );
}

function Category({ data }) {
  return (
    <p>
      {!!data?.length &&
        data?.map((c, idx) => (
          <span key={idx}>
            <>{c}</>
            {!!idx !== data?.length - 1 && ', '}
          </span>
        ))}
    </p>
  );
}
