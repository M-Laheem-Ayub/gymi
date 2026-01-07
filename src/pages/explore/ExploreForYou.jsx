import { useNavigate } from 'react-router-dom';
import { PlayCircle, Users, ChevronRight, Lock } from 'lucide-react';

const ExploreForYou = () => {
    const navigate = useNavigate();

    const WorkoutCard = ({ title, duration, level, img, category, locked = false }) => (
        <div className="flex-shrink-0 w-72 mr-4 snap-start relative group cursor-pointer">
            <div className="h-40 w-full bg-gray-800 rounded-lg relative overflow-hidden mb-2">
                <img src={img} className="w-full h-full object-cover opacity-80" alt={title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                {category && (
                    <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                        {category}
                    </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {locked ? <Lock size={32} className="text-gray-400" /> : <PlayCircle size={40} className="text-white fill-white/20" />}
                </div>
            </div>
            <h3 className="font-bold text-sm leading-tight mb-1">{title}</h3>
            <p className="text-gray-400 text-xs">{duration} • Upper • {level}</p>
        </div>
    );

    return (
        <div className="flex flex-col gap-10 pb-28 pt-2 animate-fade-in min-h-screen">

            {/* UPCOMING LIVE WORKOUTS */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">UPCOMING LIVE WORKOUTS</h2>
                <div className="w-full h-64 bg-gray-900 rounded-lg relative overflow-hidden group cursor-pointer">
                    <img src="/images/coach_featured_pakistani.png" className="w-full h-full object-cover object-top opacity-80" alt="Live Workout" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                    <div className="absolute top-4 left-4">
                        <span className="bg-white/20 backdrop-blur-md px-2 py-1 text-[10px] font-bold rounded uppercase flex items-center gap-1 w-fit">
                            ENCORE
                        </span>
                    </div>
                    <div className="absolute top-4 right-4 text-xs font-bold flex items-center gap-1 bg-black/40 px-2 py-1 rounded-full">
                        7 <Users size={12} />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <h3 className="font-bold text-xl mb-1 leading-tight">Dec 23 at 4:30 AM Recomp Roadmap: Resistance</h3>
                        <p className="text-gray-300 text-sm mb-3">35 Min • Full • Intermediate</p>
                    </div>
                </div>
                <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest mt-4 text-gray-400 hover:text-white transition-colors">
                    SEE FULL SCHEDULE <ChevronRight size={14} />
                </button>
            </div>

            {/* STRENGTH PROGRAMS FOR YOU */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">STRENGTH PROGRAMS FOR YOU (6)</h2>
                <div className="flex overflow-x-auto no-scrollbar snap-x gap-4">
                    <div className="flex-shrink-0 w-80 h-48 bg-[#2C2C2E] rounded-lg relative overflow-hidden flex flex-col justify-end p-5 cursor-pointer">
                        <img src="/images/tonal_setup.png" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Background" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="relative z-10">
                            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">STRENGTH</span>
                            <h3 className="font-bold text-xl mb-1">Absolute Strength</h3>
                            <p className="text-gray-200 text-sm">4x/2 weeks • Build Muscle • Advanced</p>
                        </div>
                    </div>
                    {/* Placeholder for a second program */}
                    <div className="flex-shrink-0 w-80 h-48 bg-[#2C2C2E] rounded-lg relative overflow-hidden flex flex-col justify-end p-5 cursor-pointer">
                        <img src="/images/slide2.png" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Background" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="relative z-10">
                            <h3 className="font-bold text-xl mb-1">12 Week Power</h3>
                            <p className="text-gray-300 text-sm">4x/12 weeks • Build Muscle</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* STRENGTH WORKOUTS FOR YOU */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">STRENGTH WORKOUTS FOR YOU (10)</h2>
                <div className="flex overflow-x-auto no-scrollbar snap-x pb-4">
                    <WorkoutCard
                        title="Chest, Back, and Arms Drop Sets"
                        duration="17 Min"
                        level="Intermediate"
                        img="/images/tonal_setup.png"
                        category="STRENGTH"
                    />
                    <WorkoutCard
                        title="Go Big or Go Home"
                        duration="36 Min"
                        level="Advanced"
                        img="/images/workout_stretch.png"
                        category="STRENGTH"
                    />
                </div>
            </div>

            {/* CUSTOM WORKOUTS */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">CUSTOM WORKOUTS (1)</h2>
                <div className="w-full bg-[#1c1c1e] rounded-lg overflow-hidden">
                    <div className="h-44 bg-[#3355ff] relative p-6 flex flex-col justify-end">
                        {/* Abstract Polygon Shape */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rotate-45 rounded-lg pointer-events-none"></div>

                        <div className="relative z-10">
                            <h3 className="font-bold text-2xl mb-1">W1</h3>
                            <p className="text-blue-100 text-sm">9 Min • Upper</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ARTICLE SPOTLIGHT */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">ARTICLE SPOTLIGHT</h2>
                <div className="flex overflow-x-auto no-scrollbar snap-x gap-4">
                    <div className="flex-shrink-0 w-80 bg-[#1c1c1e] rounded-lg overflow-hidden">
                        <div className="h-40 relative">
                            <img src="/images/hero_man.png" className="w-full h-full object-cover" alt="Article" />
                            <div className="absolute bottom-2 left-2 flex gap-2">
                                <span className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase text-white">FITNESS</span>
                                <span className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase text-white">PROGRAMS</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg leading-tight mb-2">Break Through Limits in the January Challenge</h3>
                            <p className="text-gray-400 text-xs">December 15, 2025 • By Karen Adelson</p>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-80 bg-[#1c1c1e] rounded-lg overflow-hidden">
                        <div className="h-40 relative">
                            <img src="/images/workout_core.png" className="w-full h-full object-cover" alt="Article" />
                            <div className="absolute bottom-2 left-2 flex gap-2">
                                <span className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase text-white">COMMUNITY</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg leading-tight mb-2">Meet the New Coaches: Long Story Short</h3>
                            <p className="text-gray-400 text-xs">December 10, 2025 • By Team Tonal</p>
                        </div>
                    </div>
                </div>
                <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest mt-4 text-gray-400 hover:text-white transition-colors">
                    SEE ALL ARTICLES <ChevronRight size={14} />
                </button>
            </div>

        </div >
    );
};

export default ExploreForYou;
