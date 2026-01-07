import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, X, Home, List, Compass, LayoutTemplate, Settings } from 'lucide-react';

const SearchScreen = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const navItems = [
        { id: 'home', icon: Home, label: 'Home', path: '/dashboard' },
        { id: 'activity', icon: List, label: 'Activity', path: '/activity' },
        { id: 'explore', icon: Compass, label: 'Explore', path: '/explore' },
        { id: 'custom', icon: LayoutTemplate, label: 'Custom', path: '/dashboard' },
        { id: 'settings', icon: Settings, label: 'Settings', path: '/dashboard' },
    ];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col font-sans relative overflow-hidden">
            {/* Status Bar Placeholder */}
            <div className="h-10 bg-black shrink-0"></div>

            <div className="flex-1 px-5 pt-2">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold tracking-tight">Explore</h1>
                    <button
                        onClick={() => navigate('/explore/workouts')}
                        className="p-1"
                    >
                        <X size={24} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Search Input */}
                <div className="relative border-b border-gray-700 pb-2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for programs, workouts, movements..."
                        className="w-full bg-transparent text-white text-lg placeholder-gray-500 outline-none"
                        autoFocus
                    />
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

export default SearchScreen;
