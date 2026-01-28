import SideBar from '../components/layout/SideBar';
import TopBar from '../components/layout/TopBar';
import { Outlet } from '@tanstack/react-router';

function Layout () {
    return (
        <>
            <div className="flex min-h-screen min-w-screen bg-muted">
                <SideBar />
                <div className="flex-1 flex flex-col h-full min-w-0">
                {/* TopBar */}
                <TopBar />
                    <div className="p-8 h-full">
                    <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout