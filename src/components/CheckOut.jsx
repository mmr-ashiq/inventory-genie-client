import { Fragment } from 'react'
import { ChevronRightIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { Popover, Transition } from '@headlessui/react'

const steps = [
  { name: 'Cart', href: '#', status: 'complete' },
  { name: 'Billing Information', href: '#', status: 'current' },
  { name: 'Confirmation', href: '#', status: 'upcoming' },
]
const products = [
  {
    id: 1,
    name: 'Micro Backpack',
    href: '#',
    price: '$70.00',
    color: 'Moss',
    size: '5L',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
    imageAlt:
      'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div className="fixed top-0 left-0 hidden w-1/2 h-full bg-white lg:block" aria-hidden="true" />
      <div className="fixed top-0 right-0 hidden w-1/2 h-full bg-gray-50 lg:block" aria-hidden="true" />

      <header className="relative text-sm font-medium text-gray-700 bg-white border-b border-gray-200">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex justify-end sm:justify-center">
            <a href="/" className="absolute left-0 -mt-4 top-1/2">
              <span className="sr-only">Your Company</span>
              <img
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                className="w-auto h-8"
              />
            </a>
            <nav aria-label="Progress" className="hidden sm:block">
              <ol className="flex space-x-4">
                {steps.map((step, stepIdx) => (
                  <li key={step.name} className="flex items-center">
                    {step.status === 'current' ? (
                      <a href={step.href} aria-current="page" className="text-indigo-600">
                        {step.name}
                      </a>
                    ) : (
                      <a href={step.href}>{step.name}</a>
                    )}

                    {stepIdx !== steps.length - 1 ? (
                      <ChevronRightIcon className="w-5 h-5 ml-4 text-gray-300" aria-hidden="true" />
                    ) : null}
                  </li>
                ))}
              </ol>
            </nav>
            <p className="sm:hidden">Step 2 of 4</p>
          </div>
        </div>
      </header>

      <main className="relative grid grid-cols-1 mx-auto max-w-7xl gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>

        <section
          aria-labelledby="summary-heading"
          className="px-4 pt-16 pb-10 bg-gray-50 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <ul className="text-sm font-medium text-gray-900 divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex items-start py-6 space-x-4">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="flex-none object-cover object-center w-20 h-20 rounded-md"
                  />
                  <div className="flex-auto space-y-1">
                    <h3>{product.name}</h3>
                    <p className="text-gray-500">{product.color}</p>
                    <p className="text-gray-500">{product.size}</p>
                  </div>
                  <p className="flex-none text-base font-medium">{product.price}</p>
                </li>
              ))}
            </ul>

            <dl className="hidden pt-6 space-y-6 text-sm font-medium text-gray-900 border-t border-gray-200 lg:block">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Subtotal</dt>
                <dd>$320.00</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Shipping</dt>
                <dd>$15.00</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Taxes</dt>
                <dd>$26.80</dd>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <dt className="text-base">Total</dt>
                <dd className="text-base">$361.80</dd>
              </div>
            </dl>

            <Popover className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
              <div className="relative z-10 px-4 bg-white border-t border-gray-200 sm:px-6">
                <div className="max-w-lg mx-auto">
                  <Popover.Button className="flex items-center w-full py-6 font-medium">
                    <span className="mr-auto text-base">Total</span>
                    <span className="mr-2 text-base">$361.80</span>
                    <ChevronUpIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div>
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-y-full"
                    enterTo="translate-y-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-y-0"
                    leaveTo="translate-y-full"
                  >
                    <Popover.Panel className="relative px-4 py-6 bg-white sm:px-6">
                      <dl className="max-w-lg mx-auto space-y-6">
                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Subtotal</dt>
                          <dd>$320.00</dd>
                        </div>

                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Shipping</dt>
                          <dd>$15.00</dd>
                        </div>

                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Taxes</dt>
                          <dd>$26.80</dd>
                        </div>
                      </dl>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </Popover>
          </div>
        </section>

        <form className="px-4 pt-16 pb-36 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <section aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                Contact information
              </h2>

              <div className="mt-6">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    autoComplete="email"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="payment-heading" className="mt-10">
              <h2 id="payment-heading" className="text-lg font-medium text-gray-900">
                Payment details
              </h2>

              <div className="grid grid-cols-3 mt-6 gap-y-6 gap-x-4 sm:grid-cols-4">
                <div className="col-span-3 sm:col-span-4">
                  <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                    Name on card
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name-on-card"
                      name="name-on-card"
                      autoComplete="cc-name"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-4">
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                    Card number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      autoComplete="cc-number"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-3">
                  <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                    Expiration date (MM/YY)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                      autoComplete="cc-exp"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      autoComplete="csc"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2 id="shipping-heading" className="text-lg font-medium text-gray-900">
                Shipping address
              </h2>

              <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-3">
                <div className="sm:col-span-3">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      autoComplete="street-address"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                    Apartment, suite, etc.
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="apartment"
                      name="apartment"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      autoComplete="address-level2"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="region"
                      name="region"
                      autoComplete="address-level1"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                    Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="postal-code"
                      name="postal-code"
                      autoComplete="postal-code"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="billing-heading" className="mt-10">
              <h2 id="billing-heading" className="text-lg font-medium text-gray-900">
                Billing information
              </h2>

              <div className="flex items-center mt-6">
                <input
                  id="same-as-shipping"
                  name="same-as-shipping"
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <div className="ml-2">
                  <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-900">
                    Same as shipping information
                  </label>
                </div>
              </div>
            </section>

            <div className="pt-6 mt-10 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
              >
                Continue
              </button>
              <p className="mt-4 text-sm text-center text-gray-500 sm:mt-0 sm:text-left">
                You won't be charged until the next step.
              </p>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}
