import { useState } from 'react';
import {
    Home,
    List,
    Compass,
    LayoutTemplate,
    Settings,
    Video,
    Play,
    MoreHorizontal,
    Bell
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('home');

    // Navigation Items
    const navItems = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'activity', icon: List, label: 'Activity' },
        { id: 'explore', icon: Compass, label: 'Explore' },
        { id: 'custom', icon: LayoutTemplate, label: 'Custom' },
        { id: 'settings', icon: Settings, label: 'Settings' },
    ];

    // Placeholder Data for Horizontal Scrolls
    const tonal101 = [
        { id: 1, img: '/images/workout_core.png', title: 'Setup' },
        { id: 2, img: '/images/tonal_setup.png', title: 'Intro' },
    ];

    const workouts = [
        { id: 1, title: 'Core Flow Fusion', sub: '21 Min • Full • Intermediate', img: '/images/workout_core.png' },
        { id: 2, title: 'Rise & Shine', sub: '31 Min • Yoga • Beg', img: '/images/workout_stretch.png' },
    ];

    const coaches = [
        { id: 1, name: 'AKRAM\nKHAN', img: '/images/coach_1.png' },
        { id: 2, name: 'ALI\nTABISH', img: '/images/coach_2.png' },
        { id: 3, name: 'TARIQ\nMEHMOOD', img: '/images/coach_3.png' },
    ];

    const stats = [
        { label: 'TOTAL\nVOLUME', value: '-' },
        { label: 'TOTAL\nWORKOUTS', value: '-' },
        { label: 'COMPLETED\nMOVEMENTS', value: '-' },
        { label: 'TOTAL\nPROGRAMS', value: '-' },
    ];

    return (
        <div className="h-screen w-screen bg-[#000000] text-white flex flex-col font-sans overflow-hidden relative">

            {/* Main Scrollable Content */}
            <div className="flex-1 overflow-y-auto pb-24 no-scrollbar">

                {/* 1. HERO SECTION */}
                <div className="relative w-full h-[500px] bg-black">
                    {/* Header Overlay */}
                    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-20">
                        {/* Calendar Strip */}
                        <div className="flex gap-4 items-center">
                            <div className="text-center opacity-70">
                                <div className="text-[10px] font-bold tracking-wider">SAT</div>
                                <div className="text-xl font-bold">20</div>
                            </div>
                            <div className="text-center bg-white/20 p-2 rounded-full px-3 backdrop-blur-sm">
                                <div className="text-[10px] font-bold tracking-wider">TODAY</div>
                                <div className="text-xl font-bold">21</div>
                                <div className="w-1 h-1 bg-white rounded-full mx-auto mt-1" />
                            </div>
                            <div className="text-center opacity-70">
                                <div className="text-[10px] font-bold tracking-wider">MON</div>
                                <div className="text-xl font-bold">22</div>
                            </div>
                            <div className="text-center opacity-70">
                                <div className="text-[10px] font-bold tracking-wider">TUE</div>
                                <div className="text-xl font-bold">23</div>
                            </div>
                        </div>

                        {/* Top Right Actions */}
                        <div className="flex items-center gap-3">
                            <div
                                onClick={() => navigate('/notifications')}
                                className="bg-white/20 rounded-full p-2 backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors"
                            >
                                <Bell className="text-white" size={20} />
                            </div>
                            <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                                <MoreHorizontal className="text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Background Image */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-cover bg-top"
                            style={{ backgroundImage: 'url(/images/hero_man.png)' }}
                        >
                        </div>
                    </div>

                    {/* Hero Text Content */}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-32">
                        <div className="mb-1 text-xs font-bold tracking-widest bg-white/20 w-fit px-2 py-1 rounded backdrop-blur-md">
                            AI FORM CHECK
                        </div>
                        <h1 className="text-3xl font-bold leading-tight mb-2">
                            Ready for your Form Check, Laheem?
                        </h1>
                        <p className="text-gray-400 text-sm">
                            Real-time Correction • Advanced AI
                        </p>
                    </div>
                </div>

                {/* 2. GYMI 101 */}
                <div className="px-6 py-6">
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-4">GYMI 101</h2>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
                        {tonal101.map(item => (
                            <div key={item.id} className="flex-shrink-0 w-40 h-56 rounded-lg relative overflow-hidden">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. CONTENT TYPES / ACCESSORIES */}
                <div className="px-6 py-2">
                    <div className="flex gap-4 overflow-x-auto no-scrollbar">
                        <div className="flex-shrink-0 w-64 h-32 rounded-lg overflow-hidden relative">
                            <img src="/images/content_types.png" alt="Content Types" className="w-full h-full object-cover opacity-60" />
                            <div className="absolute top-4 left-4 z-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="bg-white/20 p-1 rounded"><LayoutTemplate size={12} /></div>
                                    <span className="text-[10px] font-bold tracking-wider opacity-70">GYMI 101</span>
                                </div>
                                <h3 className="font-bold">Content Types</h3>
                                <p className="text-xs text-gray-400">1 Min</p>
                            </div>
                            <div className="absolute bottom-4 right-4 bg-white/10 rounded-full p-2">
                                <Play size={16} fill="white" />
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-64 h-32 rounded-lg overflow-hidden relative">
                            <img src="/images/accessories.png" alt="Accessories" className="w-full h-full object-cover opacity-60" />
                            <div className="absolute top-4 left-4 z-10">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="bg-white/20 p-1 rounded"><LayoutTemplate size={12} /></div>
                                    <span className="text-[10px] font-bold tracking-wider opacity-70">GYMI 101</span>
                                </div>
                                <h3 className="font-bold">Smart Accessories</h3>
                                <p className="text-xs text-gray-400">1 Min</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* 5. ON THE GO WORKOUTS */}
                <div className="px-6 py-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-sm font-bold tracking-widest uppercase">ON THE GO WORKOUTS</h2>
                    </div>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar">
                        {workouts.map(workout => (
                            <div key={workout.id} className="flex-shrink-0 w-72">
                                <div className="w-full h-40 rounded-lg mb-3 relative overflow-hidden">
                                    <img src={workout.img} alt={workout.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                        <Play size={24} className="opacity-80" />
                                    </div>
                                </div>
                                <h3 className="font-bold text-sm">{workout.title}</h3>
                                <p className="text-gray-500 text-xs">{workout.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 6. MEET YOUR COACHES */}
                <div className="px-6 py-6">
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-6">MEET YOUR COACHES</h2>
                    <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 text-center">
                        {coaches.map(coach => (
                            <div key={coach.id} className="flex-shrink-0 flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full mb-3 border-2 border-transparent hover:border-white transition-colors overflow-hidden">
                                    <img src={coach.img} alt={coach.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-bold text-xs uppercase whitespace-pre-line leading-tight">{coach.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 7. STATS GRID */}
                <div className="px-6 py-6">
                    {/* Weekly Streak Card */}
                    <div className="bg-[#1c1c1e] p-6 rounded-lg mb-4 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold uppercase tracking-widest text-xs mb-2">WEEKLY STREAK</h3>
                            <p className="text-gray-400 text-sm max-w-[150px]">Consistency is key. Keep the momentum going!</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-[10px] text-gray-500 text-right uppercase mb-1">0 Active Days</div>
                            <div className="grid grid-cols-7 gap-1">
                                {[...Array(28)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 rounded-full bg-gray-700/50" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Leaderboard Card */}
                    <div className="bg-[#1c1c1e] p-6 rounded-lg mb-4">
                        <h2 className="text-2xl font-bold mb-1">No Rank</h2>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">LEADERBOARD</div>
                        <p className="text-gray-400 text-sm">
                            Compete with fitness enthusiasts from Lahore and beyond.
                        </p>
                    </div>

                    {/* 4-Grid Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-[#1c1c1e] p-6 rounded-lg h-32 flex flex-col justify-end">
                                <div className="text-2xl font-bold mb-1">-</div>
                                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400 whitespace-pre-line leading-relaxed">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Spacer for bottom nav */}
                <div className="h-20" />
            </div>

            {/* FLOATING ACTION BUTTON (Video) */}
            <div className="absolute bottom-24 right-6 pointer-events-auto">
                <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 7L15 11V13L21 17V7Z" fill="black" />
                        <path d="M3 6H15V18H3V6Z" fill="black" />
                        <path d="M7 10L11 12L7 14V10Z" fill="white" />
                    </svg>
                </button>
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-[#000000] border-t border-gray-900 px-6 py-4 pb-6 flex justify-between items-center z-50">
                <button onClick={() => setActiveTab('home')} className="flex flex-col items-center gap-1 transition-colors text-white">
                    <Home strokeWidth={3} size={24} />
                    <span className="text-[10px] font-medium">Home</span>
                </button>
                <button onClick={() => navigate('/activity')} className="flex flex-col items-center gap-1 transition-colors text-gray-500">
                    <List strokeWidth={2} size={24} />
                    <span className="text-[10px] font-medium">Activity</span>
                </button>
                <button onClick={() => setActiveTab('explore')} className="flex flex-col items-center gap-1 transition-colors text-gray-500">
                    <Compass strokeWidth={2} size={24} />
                    <span className="text-[10px] font-medium">Explore</span>
                </button>
                <button onClick={() => setActiveTab('custom')} className="flex flex-col items-center gap-1 transition-colors text-gray-500">
                    <LayoutTemplate strokeWidth={2} size={24} />
                    <span className="text-[10px] font-medium">Custom</span>
                </button>
                <button onClick={() => setActiveTab('settings')} className="flex flex-col items-center gap-1 transition-colors text-gray-500">
                    <Settings strokeWidth={2} size={24} />
                    <span className="text-[10px] font-medium">Settings</span>
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
