import { Fragment } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';
import { useAdvancedSearch } from './hooks/useAdvancedSearch';

export const FilterDialog = () => {
  const {
    state: { isOpenModal },
    dispatch,
  } = useAdvancedSearch();

  const handleCloseMenu = () => dispatch({ type: 'toggleModal', payload: false });

  return (
    <Transition.Root show={isOpenModal} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={handleCloseMenu}>
        <div className="absolute inset-0 overflow-hidden">
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

          <div className="fixed inset-y-0 left-0 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="w-screen max-w-sm">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-hidden">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Filter products
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={handleCloseMenu}
                        >
                          <span className="sr-only">Zamknij</span>
                          <XIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
