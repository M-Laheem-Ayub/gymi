import { Plus, MoreVertical, Filter, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const CustomList = () => {
    const navigate = useNavigate();

    const workouts = [
        {
            id: 1,
            title: "My Workout",
            date: "Created 12/22/2025",
            duration: "10 mins",
            iconColor: "bg-[#2ECC71]" // Green
        },
        {
            id: 2,
            title: "Leg Day Destruction",
            date: "Created 01/05/2026",
            duration: "45 mins",
            iconColor: "bg-[#E74C3C]" // Red
        },
        {
            id: 3,
            title: "Full Body Blast",
            date: "Created 01/07/2026",
            duration: "30 mins",
            iconColor: "bg-[#3498DB]" // Blue
        },
        {
            id: 4,
            title: "Morning Cardio",
            date: "Created 01/08/2026",
            duration: "20 mins",
            iconColor: "bg-[#F1C40F]" // Yellow
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col relative pb-24 animate-fade-in">
            {/* Header */}
            <div className="p-6 pt-12">
                <h1 className="text-4xl font-bold tracking-tight">Custom</h1>
            </div>

            {/* List */}
            <div className="px-4 flex flex-col gap-4">
                {workouts.map((workout) => (
                    <div key={workout.id} className="flex items-center gap-4 p-2 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                        <div className={`w-16 h-16 rounded-md ${workout.iconColor} flex items-center justify-center`}>
                            <ChevronUp className="text-black/50" size={32} strokeWidth={3} />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-lg">{workout.title}</h3>
                            <p className="text-gray-500 text-sm">{workout.date} • {workout.duration}</p>
                        </div>
                        <button className="p-2 text-gray-500 hover:text-white">
                            <MoreVertical size={24} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Footer Actions */}
            <div className="fixed bottom-24 left-0 w-full px-6 flex items-center justify-between pointer-events-none">
                {/* Filter Button (Centered) */}
                <div className="flex-1 flex justify-center ps-12 pointer-events-auto">
                    <button className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 font-bold text-sm tracking-widest shadow-lg">
                        <Filter size={18} />
                        FILTER
                    </button>
                </div>

                {/* FAB (Right) */}
                <div className="pointer-events-auto">
                    <button
                        onClick={() => navigate('/custom/builder')}
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200 transition-colors"
                    >
                        <Plus size={32} strokeWidth={2.5} />
                    </button>
                </div>
            </div>

            {/* Bottom Navigation */}
            <Navbar />
        </div>
    );
};

export default CustomList;
