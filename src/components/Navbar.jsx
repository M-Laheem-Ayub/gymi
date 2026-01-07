import { useNavigate, useLocation } from 'react-router-dom';
import {
    Home,
    List,
    Compass,
    LayoutTemplate,
    Settings
} from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { id: 'home', icon: Home, label: 'Home', path: '/dashboard' },
        { id: 'activity', icon: List, label: 'Activity', path: '/activity' },
        { id: 'explore', icon: Compass, label: 'Explore', path: '/explore' },
        { id: 'custom', icon: LayoutTemplate, label: 'Custom', path: '/custom/list' },
        { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
    ];

    // Simple active check logic
    const isItemActive = (path) => {
        if (path === '/custom' && location.pathname.startsWith('/custom')) return true;
        if (path === '/explore' && location.pathname.startsWith('/explore')) return true;
        // Add more precise checks if needed
        return location.pathname === path;
    };


    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#000000] border-t border-gray-900 px-6 py-4 pb-6 flex justify-between items-center z-50">
            {navItems.map((item) => {
                const isActive = isItemActive(item.path);
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
    );
};

export default Navbar;
