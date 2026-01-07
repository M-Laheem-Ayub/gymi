import { ArrowLeft, Play, Info, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const MovementDetail = () => {
    const navigate = useNavigate();
    const [reps, setReps] = useState(20);
    const [warmUp, setWarmUp] = useState(false);

    // Reusable Toggle/Option Card
    const OptionCard = ({ title, options, active, setActive }) => (
        <div className="bg-[#1c1c1e] p-4 rounded-xl mb-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-xs uppercase tracking-widest text-white">{title}</h3>
                <Info size={16} className="text-gray-500" />
            </div>
            <div className="flex gap-2">
                {options.map(opt => (
                    <button
                        key={opt.id}
                        onClick={() => setActive(opt.id)}
                        className={`flex-1 py-4 px-2 rounded-lg flex flex-col items-center justify-center gap-2 transition-colors ${active === opt.id ? 'bg-white text-black' : 'bg-[#2c2c2e] text-gray-400'}`}
                    >
                        {opt.icon && <div className={`w-5 h-5 ${active === opt.id ? 'bg-black' : 'bg-gray-500'} rounded-full`}></div>}
                        <span className="text-[10px] font-bold uppercase tracking-wider">{opt.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-black text-white flex flex-col animate-fade-in relative pb-28">
            {/* Header */}
            <div className="p-4 pt-8 flex items-center justify-between sticky top-0 bg-black z-20">
                <button onClick={() => navigate(-1)} className="p-2">
                    <ArrowLeft size={24} />
                </button>
                <h1 className="text-lg font-bold flex-1 text-center pr-10">Alternating Biceps Curl</h1>
                <button className="text-gray-400 font-medium">About</button>
            </div>

            {/* Video/Preview Area */}
            <div className="h-80 w-full relative mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for video content */}
                    <img src="/images/workout_stretch.png" className="w-48 h-full object-cover opacity-60 mix-blend-lighten" alt="Demo" />
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center absolute z-10">
                        <Play size={24} className="ml-1 text-white fill-current" />
                    </div>
                </div>
                {/* 3D Model / Video Toggle */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex bg-[#1c1c1e] rounded-full p-1">
                    <button className="px-6 py-2 bg-white text-black rounded-full text-xs font-bold">Movement Demo</button>
                    <button className="px-6 py-2 text-gray-400 text-xs font-bold">Muscle View</button>
                </div>
            </div>

            <div className="px-4 flex flex-col gap-4">
                {/* Sets & Reps */}
                <div className="bg-[#1c1c1e] p-6 rounded-xl">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-xs uppercase tracking-widest">SETS & REPS <span className="text-gray-400 ml-2 normal-case">3 Sets</span></h3>
                        <Info size={16} className="text-gray-500" />
                    </div>

                    <div className="flex items-center justify-between mb-8">
                        <span className="text-sm text-gray-300">Add Warm-Up Set</span>
                        <div
                            className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${warmUp ? 'bg-white' : 'bg-[#2c2c2e]'}`}
                            onClick={() => setWarmUp(!warmUp)}
                        >
                            <div className={`w-5 h-5 bg-black rounded-full shadow-sm transition-transform ${warmUp ? 'translate-x-5' : 'translate-x-0'}`}></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-gray-300">Total Reps</span>
                        </div>
                        <div className="flex items-center bg-[#2c2c2e] rounded-lg">
                            <button onClick={() => setReps(Math.max(1, reps - 1))} className="p-3 px-4 text-white hover:bg-white/10 rounded-l-lg">
                                <Minus size={18} />
                            </button>
                            <span className="mx-2 font-bold text-xl min-w-[30px] text-center">{reps}</span>
                            <button onClick={() => setReps(reps + 1)} className="p-3 px-4 text-white hover:bg-white/10 rounded-r-lg">
                                <Plus size={18} />
                            </button>
                        </div>
                    </div>
                    {/* Show All Sets Dropdown Placeholder */}
                    <div className="mb-6 flex items-center text-[10px] font-bold uppercase tracking-widest text-white cursor-pointer">
                        SHOW ALL SETS <ChevronRight size={12} className="ml-1 rotate-90" />
                    </div>

                    <div className="flex items-center justify-between gap-4 opacity-50">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#2c2c2e]"></div>
                            <span className="text-gray-300">Seconds</span>
                        </div>
                        <div className="w-32 h-10 bg-[#2c2c2e] rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-xl font-bold">-</span>
                        </div>
                    </div>
                </div>

                {/* Weight Modes */}
                <div className="bg-[#1c1c1e] p-6 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-xs uppercase tracking-widest text-white">WEIGHT MODES</h3>
                        <Info size={16} className="text-gray-500" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {['SMART FLEX', 'ECCENTRIC', 'CHAINS'].map((mode, i) => (
                            <button key={mode} className="bg-[#2c2c2e] py-4 rounded-lg flex flex-col items-center gap-2">
                                {/* Mock Icons */}
                                {i === 0 && <div className="font-bold text-lg">⚡</div>}
                                {i === 1 && <div className="font-bold text-lg">⬇</div>}
                                {i === 2 && <div className="font-bold text-lg">🔗</div>}
                                <span className="text-[8px] font-bold uppercase tracking-wider text-gray-300">{mode}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Assistance */}
                <div className="bg-[#1c1c1e] p-6 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-xs uppercase tracking-widest text-white">ASSISTANCE</h3>
                        <Info size={16} className="text-gray-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <button className="bg-white py-4 rounded-lg flex flex-col items-center gap-2">
                            <div className="w-4 h-4 rounded-full border-4 border-black"></div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-black">SPOTTER</span>
                        </button>
                        <button className="bg-[#2c2c2e] py-4 rounded-lg flex flex-col items-center gap-2">
                            <div className="font-bold text-gray-400">🔥</div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">BURNOUT</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sticky Add Button */}
            <div className="fixed bottom-0 left-0 w-full p-4 bg-black/80 backdrop-blur-md border-t border-gray-900 z-50">
                <button
                    onClick={() => navigate('/custom/builder')}
                    className="w-full bg-white text-black font-bold py-4 rounded-full uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors"
                >
                    ADD MOVEMENT
                </button>
            </div>
        </div>
    );
};

// Helper component for chevron (missing import above)
import { ChevronRight } from 'lucide-react';

export default MovementDetail;
