import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../context/products.context';
import { CustomerDetails } from './CustomerDetails';

export default function Example() {
  const [open, setOpen] = useState(false);
  const { cart, removeAllWithId, setNewCart } = useCart();
  const navigate = useNavigate();
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const totalAmount = (
    cart.reduce((acc, product) => {
      if (product?.quantity) {
        return acc + product.quantity * product.price;
      } else {
        return acc + product.price;
      }
    }, 0) +
    100 +
    cart.reduce((acc, product) => {
      if (product?.quantity) {
        return acc + product.quantity * product.price;
      } else {
        return acc + product.price;
      }
    }, 0) *
      0.02
  ).toFixed(2);

  const handleQuantityChange = (id, quantity) => {
    const newCart = cart.map((product) => {
      if (product._id === id) {
        return {
          ...product,
          quantity: Number(quantity)
        };
      }
      return product;
    });

    setNewCart(newCart);
  };

  function handlePayNow() {
    toast.success('Payment Successfull');
    navigate(-1);
    setNewCart([]);
  }

  function handleContinueShopping() {
    navigate(-1);
  }

  return (
    <div className='bg-white'>
      <main>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl pt-16'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
              Shopping Cart
            </h1>

            <form className='mt-12'>
              <section aria-labelledby='cart-heading'>
                <h2 id='cart-heading' className='sr-only'>
                  Items in your shopping cart
                </h2>

                <ul
                  role='list'
                  className='divide-y divide-gray-200 border-t border-b border-gray-200'
                >
                  {cart.map((product, productIdx) => (
                    <li key={product._id} className='flex py-6 sm:py-10'>
                      <div className='flex-shrink-0'>
                        {!!product.images.length && (
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className='h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32'
                          />
                        )}
                        {product.images.length === 0 && (
                          <img
                            src='https://picsum.photos/200/300'
                            alt='No image'
                            className='h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32'
                          />
                        )}
                      </div>

                      <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
                        <div>
                          <div className='flex justify-between sm:grid sm:grid-cols-2'>
                            <div className='pr-6'>
                              <h3 className='text-sm'>
                                <a
                                  href={product?.href}
                                  className='font-medium text-gray-700 hover:text-gray-800'
                                >
                                  {product.name}
                                </a>
                              </h3>
                            </div>

                            <p className='text-right text-sm font-medium text-gray-900'>
                              {product?.quantity
                                ? product?.quantity * product?.price
                                : product?.price}
                            </p>
                          </div>

                          <div className='mt-4 flex items-center sm:absolute sm:top-0 sm:left-1/2 sm:mt-0 sm:block'>
                            <label
                              htmlFor={`quantity-${productIdx}`}
                              className='sr-only'
                            >
                              Quantity, {product.name}
                            </label>

                            <div>
                              <label> quantity: </label>
                              <input
                                type='number'
                                name={product._id}
                                defaultValue={1}
                                onChange={(e) => {
                                  if (e.target.value < 1) {
                                    e.target.value = 1;
                                  }

                                  handleQuantityChange(
                                    product._id,
                                    e.target.value
                                  );
                                }}
                              />
                            </div>

                            <button
                              type='button'
                              className='ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3'
                            >
                              <span
                                onClick={() => removeAllWithId(product._id)}
                              >
                                Remove
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* customer details  */}
              <CustomerDetails
                selectedCustomer={selectedCustomer}
                setSelectedCustomer={setSelectedCustomer}
                totalAmount={totalAmount}
              />

              {/* Order summary */}
              <section
                aria-labelledby='summary-heading'
                className='mt-10 sm:ml-32 sm:pl-6'
              >
                <div className='rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8'>
                  <h2 id='summary-heading' className='sr-only'>
                    Order summary
                  </h2>

                  <div className='flow-root'>
                    <dl className='-my-4 divide-y divide-gray-200 text-sm'>
                      <div className='flex items-center justify-between py-4'>
                        <dt className='text-gray-600'>Subtotal</dt>
                        <dd className='font-medium text-gray-900'>
                          {cart
                            .reduce((acc, product) => {
                              if (product?.quantity) {
                                return acc + product.quantity * product.price;
                              } else {
                                return acc + product.price;
                              }
                            }, 0)
                            .toFixed(2)}
                          <span text-3xl>৳</span>
                        </dd>
                      </div>
                      <div className='flex items-center justify-between py-4'>
                        <dt className='text-gray-600'>Shipping</dt>
                        <dd className='font-medium text-gray-900'>100</dd>
                      </div>
                      <div className='flex items-center justify-between py-4'>
                        <dt className='text-gray-600'>Tax</dt>
                        <dd className='font-medium text-gray-900'>
                          {(
                            cart.reduce((acc, product) => {
                              if (product?.quantity) {
                                return acc + product.quantity * product.price;
                              } else {
                                return acc + product.price;
                              }
                            }, 0) * 0.02
                          ).toFixed(2)}
                        </dd>
                      </div>
                      <div className='flex items-center justify-between py-4'>
                        <dt className='text-base font-medium text-gray-900'>
                          Order total
                        </dt>
                        <dd className='text-base font-medium text-gray-900'>
                          {(
                            cart.reduce((acc, product) => {
                              if (product?.quantity) {
                                return acc + product.quantity * product.price;
                              } else {
                                return acc + product.price;
                              }
                            }, 0) +
                            100 +
                            cart.reduce((acc, product) => {
                              if (product?.quantity) {
                                return acc + product.quantity * product.price;
                              } else {
                                return acc + product.price;
                              }
                            }, 0) *
                              0.02
                          ).toFixed(2)}
                        </dd>
                      </div>
                      <div className='flex items-center justify-between py-4'>
                        <dt className='text-base font-medium text-gray-900'>
                          Customer
                        </dt>
                        <dd className='text-base font-medium text-gray-900'>
                          {selectedCustomer?.name || 'No customer selected'}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className='mt-10'>
                  <button
                    onClick={handlePayNow}
                    type='button'
                    className='w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'
                  >
                    Pay Now
                  </button>
                </div>

                <div className='mt-6 mb-4 text-center text-sm text-gray-500'>
                  <p>
                    or&nbsp;
                    <span
                      onClick={handleContinueShopping}
                      className='cursor-pointer font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Continue Shopping
                      <span aria-hidden='true'>&nbsp;&rarr;</span>
                    </span>
                  </p>
                </div>
              </section>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
