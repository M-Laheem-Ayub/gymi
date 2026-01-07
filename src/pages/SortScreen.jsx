import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check } from 'lucide-react';

const SortScreen = () => {
    const navigate = useNavigate();
    const [selectedSort, setSelectedSort] = useState('NEWEST');

    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col font-sans text-white animate-fade-in-up">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-4 relative">
                <button
                    onClick={() => navigate(-1)} // Close Sort
                    className="p-1"
                >
                    <X size={24} strokeWidth={2.5} />
                </button>
                <h1 className="text-lg font-bold absolute left-1/2 transform -translate-x-1/2">Workouts</h1>
                <div className="w-6"></div> {/* Spacer for centering */}
            </div>

            {/* Tabs (Filter / Sort) */}
            <div className="flex w-full border-b border-gray-800">
                <button
                    onClick={() => navigate('/filter')} // Navigate to Filter Screen
                    className="flex-1 py-4 text-center text-sm font-bold text-gray-500"
                >
                    Filter
                </button>
                <button
                    className="flex-1 py-4 text-center text-sm font-bold text-white relative"
                >
                    Sort
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-[2px] bg-white"></div>
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="px-6 pt-6">
                    {['NEWEST', 'SHORTEST', 'LONGEST', 'TRENDING'].map((item) => (
                        <button
                            key={item}
                            onClick={() => setSelectedSort(item)}
                            className="w-full py-6 border-b border-gray-900 flex justify-between items-center text-left"
                        >
                            <span className={`font-bold text-xs tracking-widest ${selectedSort === item ? 'text-white' : 'text-gray-500'}`}>
                                {item}
                            </span>
                            {selectedSort === item && (
                                <Check size={20} className="text-white" strokeWidth={3} />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sticky Bottom Actions */}
            <div className="p-5 pb-8 bg-black/95 border-t border-gray-900 mt-auto backdrop-blur-sm">
                <button
                    onClick={() => navigate('/explore/workouts')} // Apply and Go Back
                    className="w-full bg-[#2C2C2E] text-gray-300 font-bold py-4 rounded-sm uppercase tracking-wider text-sm hover:bg-[#3a3a3c] transition-colors"
                >
                    SHOW RESULTS
                </button>
            </div>
        </div>
    );
};

export default SortScreen;
