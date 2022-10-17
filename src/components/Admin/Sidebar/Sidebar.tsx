import {
    Transition,
    Disclosure,
    DisclosureButton,
    DisclosurePanel
} from 'solid-headless';

import { For, JSX } from 'solid-js';

const ListMenu = {
    menu: [
        {
            id: 'overview',
            name: 'Overview'
        },
        {
            id: 'pages',
            name: 'Pages',
            submenu: [
                {
                    id: 'settings',
                    name: 'Settings'
                },
                {
                    id: 'kanban',
                    name: 'Kanban'
                },
                {
                    id: 'calendar',
                    name: 'Calendar'
                },
            ]
        },
        {
            id: 'sales',
            name: 'Sales',
            submenu: [
                {
                    id: 'products',
                    name: 'Products'
                },
                {
                    id: 'billing',
                    name: 'Billing'
                },
                {
                    id: 'invoice',
                    name: 'Invoice'
                },
            ]
        },
        {
            id: 'authentication',
            name: 'Authentication',
            submenu: [
                {
                    id: 'sign-in',
                    name: 'Sign In'
                },
                {
                    id: 'sign-up',
                    name: 'Sign Up'
                },
                {
                    id: 'forgot-password',
                    name: 'Forgot Password'
                },
            ]
        },
    ]
}

function ChevronUpIcon(props: JSX.IntrinsicElements['svg']): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            {...props}
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
            />
        </svg>
    );
}

export default function Sidebar(): JSX.Element {
    return (
        <>
            <For each={ListMenu.menu}>
                {(menu) => (
                    <Disclosure value={menu.id} defaultOpen={false} as='div'>
                        {({ isOpen }) => (
                            <>
                                {/* <For each={ListMenu.menu}> */}
                                    {/* {(menu) => ( */}
                                        <DisclosureButton as='button' class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                            <span class="flex-1 ml-3 text-left whitespace-nowrap">{menu.name}</span>
                                            <ChevronUpIcon class={`${isOpen() ? 'transform rotate-180' : ''} flex-shrink-0 w-6 h-6 transition`} />
                                        </DisclosureButton>
                                    {/* )} */}
                                {/* </For> */}
                                <Transition
                                    show={isOpen}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <DisclosurePanel as='ul' class="py-2 space-y-2" static>
                                        <For each={menu.submenu}>
                                            {(submenu) => (
                                                <li value={submenu.id}>
                                                    <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{submenu.name}</a>
                                                </li>
                                            )}
                                        </For>
                                    </DisclosurePanel>
                                </Transition>
                            </>
                        )}
                    </Disclosure>
                )}
            </For>
        </>
    );
}