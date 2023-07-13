import { useGetSingleProduct } from './../../hooks/useProducts';

export default function ProductDetailsModal({ productId }) {
  const randomImages = [
    'https://source.unsplash.com/random/400x200/?nature',
    'https://source.unsplash.com/random/400x200/?technology',
    'https://source.unsplash.com/random/400x200/?fashion',
    'https://source.unsplash.com/random/400x200/?food'
  ];
  const randomIndex = Math.floor(Math.random() * randomImages.length);
  const randomImage = randomImages[randomIndex];

  const { isLoading, data } = useGetSingleProduct(productId);

  const { product } = data || {};

  return (
    <>
      {isLoading && 'Loading'}
      <>
        {typeof product !== 'undefined' && (
          <div className='p-4'>
            <h1 className='mb-4 text-2xl font-bold'>Product Details</h1>
            <img
              src={product?.images?.[0] || randomImage}
              className='w-64 h-auto mb-8 rounded-sm'
              alt='Product'
            />
            <p className='mb-4'>
              <span className='font-bold'>Product Name:</span> {product?.name}
            </p>
            <p className='mb-4'>
              <span className='font-bold'>Product Description:</span>{' '}
              {product?.description}
            </p>
            <p className='mb-4'>
              <span className='font-bold'>Category:</span>{' '}
              <Category data={product?.category} />
            </p>
            <p className='mb-4'>
              <span className='font-bold'>Price:</span> {product?.price}
            </p>
            <p className='mb-4'>
              <span className='font-bold'>Variants:</span>{' '}
              <Category data={product?.variants} />
            </p>
            <p className='mb-4'>
              <span className='font-bold'>Discount:</span> {product?.discount}
            </p>
            <p className='mb-4'>
              <span className='font-bold'>Stock:</span> {product?.stock}
            </p>
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
            {c}
            {idx !== data?.length - 1 && ', '}
          </span>
        ))}
    </p>
  );
}
