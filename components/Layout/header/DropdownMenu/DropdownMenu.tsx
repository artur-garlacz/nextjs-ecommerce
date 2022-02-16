import { useAuth } from '@components/auth/hooks/useAuth';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

type Props = {
  userImage: string;
};

export const DropdownMenu = ({ userImage }: Props) => {
  const { signOut } = useAuth();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex justify-center items-center w-full">
        <img src={userImage} className="w-10 h-10 rounded-full" alt="profile" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {/* {active ? (
                      <EditActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <EditInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )} */}
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {/* {active ? (
                      <DuplicateActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <DuplicateInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )} */}
                  Duplicate
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {/* {active ? (
                      <ArchiveActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <ArchiveInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )} */}
                  Archive
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {/* {active ? (
                      <MoveActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <MoveInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )} */}
                  Move
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => signOut()}
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {/* {active ? (
                      <DeleteActiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                      />
                    )} */}
                  Wyloguj się
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
