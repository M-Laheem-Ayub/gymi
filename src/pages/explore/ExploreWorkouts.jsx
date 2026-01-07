import { useNavigate } from 'react-router-dom';
import { PlayCircle, Users, ChevronRight, SlidersHorizontal, Lock } from 'lucide-react';

const ExploreWorkouts = () => {
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
                {/* Play Icon / Lock Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {locked ? <Lock size={32} className="text-gray-400" /> : <PlayCircle size={40} className="text-white fill-white/20" />}
                </div>
            </div>
            <h3 className="font-bold text-sm leading-tight mb-1">{title}</h3>
            <p className="text-gray-400 text-xs">{duration} • Full • {level}</p>
        </div>
    );

    return (
        <div className="flex flex-col gap-10 pb-32 pt-2 animate-fade-in relative min-h-screen">

            {/* UPCOMING LIVE WORKOUTS */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    UPCOMING LIVE WORKOUTS
                </h2>
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

            {/* EDITOR'S PICKS */}
            <div>
                <h2 className="text-xl font-bold mb-2">Editor’s Picks</h2>
                <p className="text-gray-400 text-sm mb-4">Tap in to these workouts that blend various training styles.</p>
                <div className="flex overflow-x-auto no-scrollbar snap-x pb-4">
                    <WorkoutCard
                        title="Chain Reaction Drop Sets"
                        duration="39 Min"
                        level="Advanced"
                        img="/images/tonal_setup.png"
                        category="STRENGTH"
                    />
                    <WorkoutCard
                        title="Core Flow Fusion"
                        duration="46 Min"
                        level="Intermediate"
                        img="/images/workout_core.png"
                        category="CORE"
                    />
                    <WorkoutCard
                        title="Functional Strength"
                        duration="30 Min"
                        level="Beginner"
                        img="/images/workout_stretch.png"
                        category="STRENGTH"
                    />
                </div>
            </div>

            {/* CUSTOM BY GYMI */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">CUSTOM BY GYMI (94)</h2>
                <div className="flex overflow-x-auto no-scrollbar snap-x gap-4 pb-4">
                    <div className="flex-shrink-0 w-80 h-48 bg-[#2C2C2E] rounded-lg relative overflow-hidden flex flex-col justify-end p-5 cursor-pointer hover:opacity-90 transition-opacity">
                        <img src="/images/custom_bg_1.png" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" alt="Background" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="relative z-10">
                            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">STRENGTH</span>
                            <h3 className="font-bold text-2xl mb-1">Heavy/Light Hypertrophy</h3>
                            <p className="text-gray-300 text-sm">26 Min • Full • Intermediate</p>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-80 h-48 bg-[#2C2C2E] rounded-lg relative overflow-hidden flex flex-col justify-end p-5 cursor-pointer hover:opacity-90 transition-opacity">
                        <img src="/images/custom_bg_2.png" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" alt="Background" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="relative z-10">
                            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">STRENGTH</span>
                            <h3 className="font-bold text-2xl mb-1">Strong & Lean</h3>
                            <p className="text-gray-300 text-sm">28 Min • Full • Advanced</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW WORKOUTS */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">NEW WORKOUTS (10)</h2>
                <div className="flex overflow-x-auto no-scrollbar snap-x pb-4">
                    <WorkoutCard
                        title="Recomp Roadmap: Functional Strength"
                        duration="32 Min"
                        level="Intermediate"
                        img="/images/workout_stretch.png"
                        category="HIGH INTENSITY"
                    />
                    <WorkoutCard
                        title="Recovery Flow"
                        duration="29 Min"
                        level="Beginner"
                        img="/images/workout_core.png"
                        category="RECOVERY"
                    />
                    <WorkoutCard
                        title="Tabata Torch"
                        duration="20 Min"
                        level="Advanced"
                        img="/images/hero_man.png"
                        category="HIIT"
                    />
                </div>
            </div>

            {/* TRENDING WORKOUTS */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">TRENDING WORKOUTS (8)</h2>
                <div className="flex overflow-x-auto no-scrollbar snap-x pb-4">
                    <WorkoutCard
                        title="Recomp Roadmap: Power"
                        duration="29 Min"
                        level="Intermediate"
                        img="/images/workout_stretch.png"
                        category="HIGH INTENSITY"
                    />
                    <WorkoutCard
                        title="Drop Set Gains"
                        duration="30 Min"
                        level="Advanced"
                        img="/images/tonal_setup.png"
                        category="STRENGTH"
                    />
                </div>
            </div>

            {/* QUICK WORKOUTS */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">QUICK WORKOUTS (785)</h2>
                <div className="flex overflow-x-auto no-scrollbar snap-x pb-4">
                    <WorkoutCard
                        title="Quick Fit: Dynamic Core"
                        duration="12 Min"
                        level="Advanced"
                        img="/images/workout_core.png"
                        category="STRENGTH"
                    />
                    <WorkoutCard
                        title="Energizer"
                        duration="11 Min"
                        level="Beginner"
                        img="/images/workout_stretch.png"
                        category="CARDIO"
                    />
                </div>
            </div>

            {/* PILATES ON TONAL */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">PILATES ON TONAL (8)</h2>
                <div className="flex overflow-x-auto no-scrollbar snap-x pb-4">
                    <WorkoutCard
                        title="Pilates Classic: Beginner Moves"
                        duration="20 Min"
                        level="Beginner"
                        img="/images/workout_stretch.png"
                        category="PILATES"
                    />
                    <WorkoutCard
                        title="Core Control"
                        duration="25 Min"
                        level="Intermediate"
                        img="/images/workout_core.png"
                        category="PILATES"
                    />
                </div>
            </div>

            {/* WORKOUTS WITH ANKLE STRAPS */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">WORKOUTS WITH ANKLE STRAPS (9)</h2>
                <div className="flex overflow-x-auto no-scrollbar snap-x pb-4">
                    <WorkoutCard
                        title="All-Around Glutes with Ankle Straps"
                        duration="54 Min"
                        level="Intermediate"
                        img="/images/workout_stretch.png"
                        category="STRENGTH"
                    />
                    <WorkoutCard
                        title="Legs for Days"
                        duration="28 Min"
                        level="Advanced"
                        img="/images/workout_core.png"
                        category="STRENGTH"
                    />
                </div>
            </div>

            {/* FLOATING FILTER BUTTON */}
            <div className="fixed bottom-24 left-0 w-full flex justify-center z-40 pointer-events-none">
                <button
                    onClick={() => navigate('/filter')}
                    className="flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider shadow-lg pointer-events-auto hover:bg-gray-200 transition-colors"
                >
                    <SlidersHorizontal size={18} strokeWidth={2.5} />
                    FILTER
                </button>
            </div>

        </div>
    );
};

export default ExploreWorkouts;
