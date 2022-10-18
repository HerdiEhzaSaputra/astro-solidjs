import Sidebar from "../Admin/Sidebar/Sidebar"
import Navbar from "../Admin/Nav/Navbar"
import { createSignal } from "solid-js";

export default function AdminLayout() {
    const [showSidebar, setShowSidebar] = createSignal(false);
    return (
        <>
            <Sidebar 
                showSidebar={showSidebar()}
                setShowSidebar={setShowSidebar}
            />

            <div class="relative w-full flex flex-col flex-1 overflow-x-hidden">

                <Navbar 
                    showSidebar={showSidebar()}
                    setShowSidebar={setShowSidebar}
                />

                <main class="overflow-y-auto">
                    <slot />
                </main>
            </div>
        </>
    )
}
