import { X, Pencil, MoreHorizontal, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CustomBuilder = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white flex flex-col animate-fade-in">
            {/* Header */}
            <div className="p-4 pt-8 flex items-center justify-between">
                <button onClick={() => navigate('/custom')} className="p-2">
                    <X size={24} />
                </button>
                <div className="w-8"></div> {/* Spacer for balance */}
            </div>

            {/* Title Section */}
            <div className="px-6 mb-8">
                <div className="flex items-center justify-between mb-1">
                    <h1 className="text-3xl font-bold">My Workout</h1>
                    <button
                        onClick={() => navigate('/custom/settings')}
                        className="w-10 h-10 bg-[#1c1c1e] rounded-full flex items-center justify-center text-gray-400 hover:text-white"
                    >
                        <Pencil size={18} />
                    </button>
                </div>
                <div className="text-gray-400 text-sm mb-4">0 Min</div>
                <div className="text-gray-500 text-lg">Description</div>
            </div>

            {/* Block 1 */}
            <div className="px-4">
                <div className="bg-[#1c1c1e] rounded-lg overflow-hidden">
                    <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                            <h3 className="font-bold text-lg uppercase tracking-wider">BLOCK 1</h3>
                            <span className="text-gray-400 text-sm">3 Sets</span>
                        </div>
                        <button className="text-gray-400">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>

                    {/* Empty Block Content */}
                    <div className="h-64 flex flex-col items-center justify-center p-8">
                        <button
                            onClick={() => navigate('/custom/movements')}
                            className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center text-white mb-3 hover:bg-white/10 transition-colors"
                        >
                            <Plus size={32} strokeWidth={1.5} />
                        </button>
                        <span className="font-bold text-xs uppercase tracking-widest text-gray-300">ADD MOVE</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomBuilder;
