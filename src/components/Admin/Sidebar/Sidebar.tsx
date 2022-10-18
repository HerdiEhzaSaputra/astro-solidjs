import {
    Transition,
    Disclosure,
    DisclosureButton,
    DisclosurePanel
} from 'solid-headless';

import { createSignal, For, JSX, Show, createUniqueId, Setter } from 'solid-js';

const ListMenu = {
    menu: [
        {
            id: 'overview',
            name: 'Overview',
            icon: '<svg aria-hidden="true" class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>',
            href: '#'
        },
        {
            id: 'pages',
            name: 'Pages',
            href: '#',
            submenu: [
                {
                    id: 'settings',
                    name: 'Settings',
                    href: '#'
                },
                {
                    id: 'kanban',
                    name: 'Kanban',
                    href: '#'
                },
                {
                    id: 'calendar',
                    name: 'Calendar',
                    href: '#'
                },
            ]
        },
        {
            id: 'sales',
            name: 'Sales',
            href: '#',
            submenu: [
                {
                    id: 'products',
                    name: 'Products',
                    href: '#'
                },
                {
                    id: 'billing',
                    name: 'Billing',
                    href: '#'
                },
                {
                    id: 'invoice',
                    name: 'Invoice',
                    href: '#'
                },
            ]
        },
        {
            id: 'authentication',
            name: 'Authentication',
            href: '#',
            submenu: [
                {
                    id: 'sign-in',
                    name: 'Sign In',
                    href: '#'
                },
                {
                    id: 'sign-up',
                    name: 'Sign Up',
                    href: '#'
                },
                {
                    id: 'forgot-password',
                    name: 'Forgot Password',
                    href: '#'
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

export const Sidebar = (props: {
    showSidebar: boolean;
    setShowSidebar: Setter<boolean>;
}) => {
    const [isOpen, setisOpen] = createSignal(false);
    // const [sidebarOpen, setisOpen] = createSignal(false);

    return (
        <>
            {/* <Transition
                show={props.showSidebar}
                class="py-2 space-y-2"
                as='ul'
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            > */}
                <Show
                    when={props.showSidebar}
                >

                    <aside id="sidebar" class="hidden md:block fixed z-30 inset-y-0 left-0 transition duration-300 transform bg-gray-100 dark:bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
                        <div class="py-[1.1rem] mt-[0.04rem]">
                            <a href="https://flowbite.com/" class="flex items-center pl-2.5">
                                <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-7" alt="Flowbite Logo" />
                                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                            </a>
                        </div>

                        <div class="flex flex-col left-0 w-64 hover:w-64 md:w-64 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
                            <div class="mb-[4.1rem] overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                                <div class='space-y-2 mt-2'>
                                    <For each={ListMenu.menu} fallback={<div>Loading...</div>}>
                                        {(menu) => (
                                            <Disclosure value={menu.id} defaultOpen={false} as='div'>
                                                {({ isOpen }) => (
                                                    <>
                                                        <Show when={!menu.submenu} keyed>
                                                            <button class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                                                <span class="flex-1 ml-3 text-left whitespace-nowrap">{menu.name}</span>
                                                            </button>
                                                        </Show>
                                                        <Show when={menu.submenu} keyed>
                                                            <DisclosureButton as='button' class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                                                <span class="flex-1 ml-3 text-left whitespace-nowrap">{menu.name}</span>
                                                                <ChevronUpIcon class={`${isOpen() ? 'transform rotate-180' : ''} flex-shrink-0 w-6 h-6 transition`} />
                                                            </DisclosureButton>
                                                        </Show>
                                                        <Transition
                                                            show={isOpen()}
                                                            class="py-2 space-y-2"
                                                            as='ul'
                                                            enter="transition duration-100 ease-out"
                                                            enterFrom="transform scale-95 opacity-0"
                                                            enterTo="transform scale-100 opacity-100"
                                                            leave="transition duration-75 ease-out"
                                                            leaveFrom="transform scale-100 opacity-100"
                                                            leaveTo="transform scale-95 opacity-0"
                                                        >
                                                            <DisclosurePanel
                                                                as='li'
                                                                static
                                                            >
                                                                <Show when={menu.submenu} keyed>
                                                                    <For each={menu.submenu} fallback={<div class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Loading...</div>}>
                                                                        {(submenu) => (
                                                                            <a
                                                                                href={submenu.href}
                                                                                value={submenu.id}
                                                                            >
                                                                                <button
                                                                                    class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                                >
                                                                                    {submenu.name}
                                                                                </button>
                                                                            </a>
                                                                        )}
                                                                    </For>
                                                                </Show>
                                                            </DisclosurePanel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Disclosure>
                                        )}
                                    </For>
                                </div>
                            </div>
                        </div>
                    </aside>

                </Show>


            {/* </Transition> */}
        </>
    );
}

export default Sidebar;