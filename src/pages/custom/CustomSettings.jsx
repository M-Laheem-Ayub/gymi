import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CustomSettings = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white flex flex-col animate-fade-in">
            {/* Header */}
            <div className="p-4 pt-8 flex items-center justify-between mb-8">
                <button onClick={() => navigate(-1)} className="p-2">
                    <ArrowLeft size={24} />
                </button>
                <button onClick={() => navigate(-1)} className="text-lg font-bold text-gray-200">
                    Done
                </button>
            </div>

            <div className="px-6 flex flex-col gap-12">
                {/* Workout Name Input */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">
                        WORKOUT NAME
                    </label>
                    <div className="text-3xl font-bold mb-4">My Workout</div>

                    {/* Custom Slider / Underline */}
                    <div className="relative w-full h-8 flex items-center">
                        <div className="w-full h-[2px] bg-gray-600 rounded-full relative">
                            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full rounded-bl-sm rotate-[135deg]"></div>
                            {/* Note: The screenshot shows a distinct teardrop/slider handle. Implementing a similar look with CSS. */}
                        </div>
                        <div className="absolute right-0 top-6 text-gray-500 text-xs">10/27</div>
                    </div>
                </div>

                {/* Description Input */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">
                        DESCRIPTION
                    </label>
                    <div className="border-b border-gray-700 pb-2">
                        {/* Empty input state */}
                    </div>
                    <div className="text-right mt-2 text-gray-500 text-xs">0/255</div>
                </div>
            </div>
        </div>
    );
};

export default CustomSettings;
