import { useNavigate } from 'react-router-dom';
import {
    Home,
    List,
    Compass,
    LayoutTemplate,
    Settings
} from 'lucide-react';

const ActivityEmpty = () => {
    const navigate = useNavigate();

    // Navigation Items
    const navItems = [
        { id: 'home', icon: Home, label: 'Home', path: '/dashboard' },
        { id: 'activity', icon: List, label: 'Activity', path: '/activity' },
        { id: 'explore', icon: Compass, label: 'Explore', path: '/explore' },
        { id: 'custom', icon: LayoutTemplate, label: 'Custom', path: '/dashboard' },
        { id: 'settings', icon: Settings, label: 'Settings', path: '/dashboard' },
    ];

    return (
        <div className="h-screen w-screen bg-[#000000] text-white flex flex-col font-sans overflow-hidden relative">

            {/* Header Section */}
            <div className="pt-12 px-6 pb-4 bg-black z-10 w-full fixed top-0 left-0">
                <h1 className="text-4xl font-bold mb-8">Activity</h1>

                {/* Tabs */}
                <div className="flex items-center gap-8 border-b border-gray-800">
                    <button className="pb-3 text-sm font-bold tracking-wide text-gray-500">
                        Friends
                    </button>
                    <button className="pb-3 text-sm font-bold tracking-wide text-white border-b-2 border-white">
                        Only You
                    </button>
                </div>
            </div>

            {/* Main Content Area - Centered Empty State */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 text-center mt-20">
                <h2 className="text-2xl font-bold mb-4">Track your history!</h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    See every workout you completed plus a recap of each, including total reps, weight lifted, and time spent training.
                </p>
            </div>

            {/* BOTTOM NAVIGATION */}
            <div className="absolute bottom-0 left-0 w-full bg-[#000000] border-t border-gray-900 px-6 py-4 pb-6 flex justify-between items-center z-50">
                {navItems.map((item) => {
                    const isActive = item.id === 'activity';
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

export default ActivityEmpty;
