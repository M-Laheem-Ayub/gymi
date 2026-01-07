import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Home,
    List,
    Compass,
    LayoutTemplate,
    Settings,
    Calendar,
    Trophy,
    Clock
} from 'lucide-react';

const Activity = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('only_you'); // Default to Only You

    // Navigation Items (Same as Dashboard)
    const navItems = [
        { id: 'home', icon: Home, label: 'Home', path: '/dashboard' },
        { id: 'activity', icon: List, label: 'Activity', path: '/activity' },
        { id: 'explore', icon: Compass, label: 'Explore', path: '/explore' },
        { id: 'custom', icon: LayoutTemplate, label: 'Custom', path: '/dashboard' },
        { id: 'settings', icon: Settings, label: 'Settings', path: '/dashboard' },
    ];

    // Mock Data for "Only You" Activity History
    const activities = [
        {
            id: 1,
            date: 'Today',
            items: [
                { title: 'Full Body Power', duration: '45 min', calories: '320 cal', type: 'Strength' }
            ]
        },
        {
            id: 2,
            date: 'Yesterday',
            items: [
                { title: 'Morning Yoga Flow', duration: '20 min', calories: '110 cal', type: 'Yoga' },
                { title: 'HIIT Blast', duration: '15 min', calories: '180 cal', type: 'Cardio' }
            ]
        },
        {
            id: 3,
            date: 'Jan 18',
            items: [
                { title: 'Upper Body Sculpt', duration: '30 min', calories: '210 cal', type: 'Strength' }
            ]
        }
    ];

    return (
        <div className="h-screen w-screen bg-[#000000] text-white flex flex-col font-sans overflow-hidden relative">

            {/* Header Section */}
            <div className="pt-12 px-6 pb-4 bg-black z-10">
                <h1 className="text-4xl font-bold mb-8">Activity</h1>

                {/* Tabs */}
                <div className="flex items-center gap-8 border-b border-gray-800">
                    <button
                        className={`pb-3 text-sm font-bold tracking-wide transition-colors ${activeTab === 'friends' ? 'text-white border-b-2 border-white' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('friends')}
                    >
                        Friends
                    </button>
                    <button
                        className={`pb-3 text-sm font-bold tracking-wide transition-colors ${activeTab === 'only_you' ? 'text-white border-b-2 border-white' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('only_you')}
                    >
                        Only You
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto pb-24 px-6 no-scrollbar">
                {activeTab === 'only_you' ? (
                    <div className="pt-6">
                        {/* Stats Summary Row */}
                        <div className="flex justify-between mb-8 overflow-x-auto no-scrollbar gap-4">
                            <div className="bg-[#1c1c1e] p-4 rounded-lg min-w-[100px] flex-1">
                                <div className="text-gray-400 text-xs font-bold uppercase mb-1">Workouts</div>
                                <div className="text-2xl font-bold">12</div>
                            </div>
                            <div className="bg-[#1c1c1e] p-4 rounded-lg min-w-[100px] flex-1">
                                <div className="text-gray-400 text-xs font-bold uppercase mb-1">Time</div>
                                <div className="text-2xl font-bold">4h 20m</div>
                            </div>
                            <div className="bg-[#1c1c1e] p-4 rounded-lg min-w-[100px] flex-1">
                                <div className="text-gray-400 text-xs font-bold uppercase mb-1">Volume</div>
                                <div className="text-2xl font-bold">12k</div>
                            </div>
                        </div>

                        {/* Activity List */}
                        <div className="flex flex-col gap-6">
                            {activities.map((day) => (
                                <div key={day.id}>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
                                        {day.date}
                                    </h3>
                                    <div className="flex flex-col gap-2">
                                        {day.items.map((item, idx) => (
                                            <div key={idx} className="bg-[#1c1c1e] p-4 rounded-lg flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    {/* Category Icon Placeholder */}
                                                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                                                        {item.type === 'Strength' ? <Trophy size={20} className="text-purple-400" /> :
                                                            item.type === 'Yoga' ? <Calendar size={20} className="text-cyan-400" /> :
                                                                <Clock size={20} className="text-orange-400" />}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-sm">{item.title}</div>
                                                        <div className="text-xs text-gray-500">{item.type}</div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-bold text-sm">{item.duration}</div>
                                                    <div className="text-xs text-gray-500">{item.calories}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* Friends Tab - Empty/Disabled State as requested */
                    <div className="pt-20 flex flex-col items-center justify-center text-center opacity-50">
                        <p className="text-gray-500 text-sm">Friends activity is disabled.</p>
                    </div>
                )}
            </div>

            {/* BOTTOM NAVIGATION */}
            <div className="absolute bottom-0 left-0 w-full bg-[#000000] border-t border-gray-900 px-6 py-4 pb-6 flex justify-between items-center z-50">
                {navItems.map((item) => {
                    const isActive = item.id === 'activity'; // Hardcoded active state for this page
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

export default Activity;
