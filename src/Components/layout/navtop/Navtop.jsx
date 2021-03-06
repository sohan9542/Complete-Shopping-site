import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useContext } from 'react'
import { RapperContent } from '../../../App'
import Addproduct from './Addproduct'
import Wish from './Wish'
import { Disclosure, } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon, } from '@heroicons/react/solid'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [cartopen, setCartopen] = useState(false)
  const [wish, setWish] = useState(false)
  const { added_products, added_wish } = useContext(RapperContent)
  const uniqueObjects = [...new Map(added_products.map(item => [item.id, item])).values()]
  let arr = []
  added_products.forEach((e) => {
    arr = [...arr, e.price]
  })
  const uniqueWish = [...new Map(added_wish.map(item => [item.id, item])).values()]
  const price = arr.reduce((total, num) => total + num, 0)
  return (
    <>
      <div className="bg-white  sticky top-0 inset-x-0 z-30" >
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div cl>
                    <Tab.List className="flex flex-col items-center">
                      <Tab

                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-primary-txt' : 'text-gray-900 border-transparent',
                            'py-1 '
                          )
                        }
                      >
                        <Link className="hover:text-new" to="/"> Home</Link>
                      </Tab>
                      <Tab

                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-primary-txt' : 'text-gray-900 border-transparent',
                            'py-1'
                          )
                        }
                      >
                        <Link className="hover:text-new" to="/shop"> Shop</Link>
                      </Tab>
                      <Tab

                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-primary-txt' : 'text-gray-900 border-transparent',
                            'py-1'
                          )
                        }
                      >
                        <Link className="hover:text-new" to="/blog">Blog</Link>
                      </Tab>
                    </Tab.List>
                    <Disclosure as="div" className="px-4 py-6 ">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                              <span className="font-medium transition delay-150 ease-linear text-gray-900 hover:text-new">Pages</span>
                              <span className="ml-6 flex items-center text-ash">
                                {open ? (
                                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">

                              <div className="flex items-center flex-col">
                                <Tab

                                  className={({ selected }) =>
                                    classNames(
                                      selected ? 'text-primary-txt' : 'text-gray-900 border-transparent',
                                      'py-1 '
                                    )
                                  }
                                >
                                  <Link className="hover:text-new" to="/about">About</Link>
                                </Tab>
                                <Tab

                                  className={({ selected }) =>
                                    classNames(
                                      selected ? 'text-primary-txt' : 'text-gray-900 border-transparent',
                                      'py-1 '
                                    )
                                  }
                                >
                                  <Link className="hover:text-new" to="/contact">Contact</Link>
                                </Tab>
                                <Tab

                                  className={({ selected }) =>
                                    classNames(
                                      selected ? 'text-primary-txt' : 'text-gray-900 border-transparent',
                                      'py-1 '
                                    )
                                  }
                                >
                                  <Link className="hover:text-new" to="/faq">FAQ</Link>
                                </Tab>
                                <Tab

                                  className={({ selected }) =>
                                    classNames(
                                      selected ? 'text-primary-txt' : 'text-gray-900 border-transparent',
                                      'py-1 '
                                    )
                                  }
                                >
                                  <Link className="hover:text-new" to="/error404">Eror 404</Link>
                                </Tab>
                              </div>

                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </Tab.Group>


                <div className="border-t border-border-clr my-6 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <Link href="#" className="-m-2 p-2 block font-medium text-gray-900 hover:text-primary-txt">
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link href="#" className="-m-2 p-2 block transition font-medium text-gray-900 hover:text-primary-txt">
                      Create account
                    </Link>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-white">
          <p className="bg-gray h-10 flex items-center justify-center text-sm font-medium text-ash px-4 sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>

          <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-border-clr">
              <div className="h-16 flex items-center">
                <button
                  type="button"
                  className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link to="/">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto"
                      src="https://d-themes.com/react/molla/demo-1/images/logo.png"
                      alt=""
                    />
                  </Link>
                </div>


                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">
                    <Popover className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-primary-txt text-primary-txt'
                                  : 'border-transparent text-gray-700 transition duration-300 ease-linear hover:text-primary-txt',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                              )}
                            >
                              <Link className="hover:text-new" to="/shop">Shop</Link>
                            </Popover.Button>
                          </div>


                        </>
                      )}
                    </Popover>
                    <Popover className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-primary-txt text-primary-txt'
                                  : 'border-transparent text-gray-700 transition duration-300 ease-linear hover:text-primary-txt',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                              )}
                            >
                              <Link to="/blog" className="hover:text-new">Blog</Link>
                            </Popover.Button>
                          </div>


                        </>
                      )}
                    </Popover>

                  </div>

                </Popover.Group>
                <Popover.Group as="nav" className="hidden md:flex ml-8">

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'border-primary-txt text-primary-txt' : 'text-gray-500 ',
                            'group bg-white rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 '
                          )}
                        >
                          <span className="font-sm mb-1">Pages</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-primary-txt' : 'text-gray-400',
                              'ml-2 mb-1 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-5 w-screen max-w-md sm:px-0">
                            <div className="rounded-lg shadow-lg  overflow-hidden">
                              <div className="relative grid gap-3 bg-white px-2 py-3 sm:gap-8 sm:p-8">

                                <Link
          to="/about"
                                  className=" flex items-center rounded-lg hover:text-primary-txt"
                                >

                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">About</p>

                                  </div>
                                </Link>
                                <Link
to="/contact"
                                  className=" flex items-start rounded-lg hover:text-primary-txt"
                                >

                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">Contact</p>

                                  </div>
                                </Link>
                                <Link
to="/faq"
                                  className=" flex items-start rounded-lg hover:text-primary-txt"
                                >

                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">FAQ</p>

                                  </div>
                                </Link>
                                <Link
to="/error404"
                                  className=" flex items-start rounded-lg hover:text-primary-txt"
                                >

                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">Error 404</p>

                                  </div>
                                </Link>

                              </div>

                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <Link href="#" className="text-sm transition duration-300 ease-linear font-medium text-gray-700 hover:text-primary-txt">
                      Sign in
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <Link href="#" className="text-sm transition duration-300 ease-linear font-medium text-gray-700 hover:text-primary-txt">
                      Create account
                    </Link>
                  </div>



                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <Link href="#" className="p-2 text-gray-400 transition duration-300 ease-linear hover:text-primary-txt">
                      <span className="sr-only">Search</span>
                      <SearchIcon className="w-5 h-5 text-blk-ash" aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Cart */}
                  <div className="ml-3 flow-root lg:ml-2">
                    <div className="group cursor-pointer -m-2 p-2 flex items-center" onClick={() => setWish(true)}>
                      <span class="relative inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blk-txt" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blk-txt transform translate-x-1/2 -translate-y-1/2 bg-primary-txt rounded-full">{added_wish.length}</span>
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 flow-root lg:ml-5">
                    <div className="group cursor-pointer -m-2 p-2 flex items-center" onClick={() => setCartopen(true)}>
                      <span class="relative inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blk-txt" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blk-txt transform translate-x-1/2 -translate-y-1/2 bg-primary-txt rounded-full">{added_products.length}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

      </div>
      <Transition.Root show={cartopen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-30" onClose={() => setCartopen(false)}>
          <div className="absolute inset-0">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Your Products</Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setCartopen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        {uniqueObjects.length === 0 ?
                          <div className="w-full h-full flex justify-center items-center text-lg bg-primary-txt text-white" style={{ height: '70vh', width: '100%' }}><h2>No Product Added</h2></div>
                          :
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-border-clr">
                              {uniqueObjects.map((product) => <Addproduct key={product.id} product={product} />)}
                            </ul>
                          </div>
                        }
                      </div>
                    </div>

                    <div className="border-t border-border-clr py-6 px-4 sm:px-6">
                      {uniqueObjects.length !== 0 &&
                        <>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${price}</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                          <div className="mt-6">
                            <Link
                              href="#"
                              className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-txt hover:bg-new"
                            >
                              Checkout
                            </Link>
                          </div>
                        </>

                      }
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="text-primary-txt font-medium hover:text-new"
                            onClick={() => setCartopen(false)}
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={wish} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-30" onClose={() => setWish(false)}>
          <div className="absolute inset-0">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Your Wishlist</Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setWish(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        {uniqueWish.length === 0 ?
                          <div className="flex justify-center items-center text-lg bg-new text-white" style={{ height: '70vh', width: '100%' }}><h2>No Wish To Show</h2></div>
                          :
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-border-clr">
                              {uniqueWish.map((product) => <Wish key={product.id} product={product} />)}
                            </ul>
                          </div>
                        }
                      </div>
                    </div>

                    <div className="border-t border-border-clr py-6 px-4 sm:px-6">

                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          <button
                            type="button"
                            className="text-new font-medium hover:text-primary-txt"
                            onClick={() => setWish(false)}
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
