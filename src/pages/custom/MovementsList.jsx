import { ArrowLeft, Search, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MovementsList = () => {
    const navigate = useNavigate();

    const movements = [
        { id: 1, name: 'Alt. Bench Press', img: '/images/thumb_bench_press.png' },
        { id: 2, name: 'Alt. Neutral Lat Pulldown', img: '/images/thumb_lat_pulldown.png' },
        { id: 3, name: 'Alternating Biceps Curl', img: '/images/workout_stretch.png' }, // Placeholder
        { id: 4, name: 'Alternating Goblet Reverse Lunge', img: '/images/workout_core.png' }, // Placeholder
        { id: 5, name: 'Alternating Staggered Pushup', img: '/images/hero_man.png' }, // Placeholder
        { id: 6, name: 'Ankle Strap Move', img: '/images/tonal_setup.png', isSpecial: true },
        { id: 7, name: 'Assisted Reverse Lunge', img: '/images/workout_stretch.png' },
        { id: 8, name: 'Assisted Squat', img: '/images/hero_man.png' },
    ];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col animate-fade-in relative">
            {/* Header */}
            <div className="p-4 pt-8 flex items-center justify-between sticky top-0 bg-black z-10">
                <button onClick={() => navigate(-1)} className="p-2">
                    <ArrowLeft size={24} />
                </button>
                <h1 className="text-lg font-bold">Movements</h1>
                <button className="text-gray-400 font-medium">Select</button>
            </div>

            {/* Search Bar */}
            <div className="px-4 mb-6 sticky top-[76px] bg-black z-10 pb-2">
                <div className="relative">
                    <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-black text-white pl-10 py-2 border-b border-gray-700 outline-none placeholder-gray-600 font-medium text-lg"
                    />
                </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto pb-8">
                <div className="px-6 mb-2 text-xl font-bold">A</div>
                <div className="flex flex-col">
                    {movements.map((move, index) => (
                        <div
                            key={move.id}
                            onClick={() => navigate('/custom/movements/detail')}
                            className="flex items-center gap-4 py-4 px-6 border-b border-gray-900 cursor-pointer hover:bg-gray-900/50 transition-colors"
                        >
                            <div className="w-16 h-16 relative flex-shrink-0 rounded overflow-hidden bg-gray-800">
                                <img src={move.img} alt={move.name} className="w-full h-full object-cover" />
                                {move.isSpecial && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                        <div className="bg-orange-500 rounded-full p-1">
                                            {/* Icon placeholder for alert */}
                                            <div className="w-2 h-2 bg-black rounded-full"></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <span className="flex-1 text-lg font-medium">{move.name}</span>
                            <ChevronRight className="text-gray-600" size={24} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovementsList;
