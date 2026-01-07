import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import {
    Home,
    List,
    Compass,
    LayoutTemplate,
    Settings,
    Search
} from 'lucide-react';

const ExploreLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Determine active tab based on path
    const getActiveTab = () => {
        if (location.pathname.includes('/workouts')) return 'workouts';
        if (location.pathname.includes('/coaches')) return 'coaches';
        return 'for_you';
    };

    const activeTab = getActiveTab();

    // Navigation Items for Bottom Bar
    const navItems = [
        { id: 'home', icon: Home, label: 'Home', path: '/dashboard' },
        { id: 'activity', icon: List, label: 'Activity', path: '/activity' },
        { id: 'explore', icon: Compass, label: 'Explore', path: '/explore' },
        { id: 'custom', icon: LayoutTemplate, label: 'Custom', path: '/custom' },
        { id: 'settings', icon: Settings, label: 'Settings', path: '/dashboard' },
    ];

    return (
        <div className="bg-black min-h-screen text-white flex flex-col font-sans relative overflow-hidden">
            {/* Status Bar Placeholder (Safe Area) */}
            <div className="h-10 bg-black shrink-0"></div>

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 flex flex-col overflow-hidden px-5 relative z-10">

                {/* HEADER */}
                <div className="flex justify-between items-center py-4 pb-2">
                    <h1 className="text-4xl font-bold tracking-tight">Explore</h1>
                    <button onClick={() => navigate('/search')}>
                        <Search size={24} strokeWidth={2.5} />
                    </button>
                </div>

                {/* TABS */}
                <div className="flex gap-8 mb-6 border-b border-gray-800">
                    <button
                        onClick={() => navigate('/explore/foryou')}
                        className={`pb-3 text-sm font-bold transition-colors relative ${activeTab === 'for_you' ? 'text-white' : 'text-gray-500'}`}
                    >
                        For You
                        {activeTab === 'for_you' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div>}
                    </button>
                    <button
                        onClick={() => navigate('/explore/workouts')}
                        className={`pb-3 text-sm font-bold transition-colors relative ${activeTab === 'workouts' ? 'text-white' : 'text-gray-500'}`}
                    >
                        Workouts
                        {activeTab === 'workouts' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div>}
                    </button>
                    <button
                        onClick={() => navigate('/explore/coaches')}
                        className={`pb-3 text-sm font-bold transition-colors relative ${activeTab === 'coaches' ? 'text-white' : 'text-gray-500'}`}
                    >
                        Coaches
                        {activeTab === 'coaches' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div>}
                    </button>
                </div>

                {/* RENDER TAB CONTENT */}
                <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
                    <Outlet />
                </div>

            </div>

            {/* BOTTOM NAVIGATION */}
            <div className="absolute bottom-0 left-0 w-full bg-[#000000] border-t border-gray-900 px-6 py-4 pb-6 flex justify-between items-center z-50">
                {navItems.map((item) => {
                    const isActive = item.id === 'explore';
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            onClick={() => navigate(item.path)}
                            className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-white' : 'text-gray-500'}`}
                        >
                            <Icon strokeWidth={isActive ? 3 : 2} size={24} />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

export default ExploreLayout;
