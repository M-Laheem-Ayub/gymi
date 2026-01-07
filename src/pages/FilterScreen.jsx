import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';

const FilterScreen = () => {
    const navigate = useNavigate();
    const [expandedFilter, setExpandedFilter] = useState('');

    const toggleFilterAccordion = (filterName) => {
        if (expandedFilter === filterName) {
            setExpandedFilter('');
        } else {
            setExpandedFilter(filterName);
        }
    };

    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col font-sans text-white animate-fade-in-up">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-4 relative">
                <button
                    onClick={() => navigate(-1)} // Close Filter
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
                    className="flex-1 py-4 text-center text-sm font-bold text-white relative"
                >
                    Filter
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-[2px] bg-white"></div>
                </button>
                <button
                    onClick={() => navigate('/sort')} // Navigate to Sort Screen
                    className="flex-1 py-4 text-center text-sm font-bold text-gray-500"
                >
                    Sort
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-3 px-4 pt-4">
                    {['TYPE', 'FORMAT', 'COACH', 'PRIMARY GOAL', 'TRAINING GOAL', 'DURATION', 'BODY REGION', 'LEVEL', 'MUSCLE GROUP'].map((item, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFilterAccordion(item)}
                                className="w-full flex justify-between items-center py-5 px-6 bg-[#121212] hover:bg-[#1c1c1e] transition-colors"
                            >
                                <span className="font-bold text-sm tracking-widest uppercase">{item}</span>
                                <ChevronDown
                                    size={20}
                                    className={`text-gray-500 transition-transform ${expandedFilter === item ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {/* Expandable Content Placeholder */}
                            {expandedFilter === item && (
                                <div className="bg-[#0a0a0a] px-6 py-4 text-gray-400 text-sm border-t border-gray-800">
                                    Options for {item} would go here...
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Sticky Bottom Actions */}
            <div className="p-5 pb-8 bg-black/95 border-t border-gray-900 mt-auto backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 font-bold text-xs uppercase tracking-widest">MUSCLE GROUP</span>
                    <ChevronDown size={16} className="text-gray-500" />
                </div>
                <button
                    onClick={() => navigate(-1)} // Apply and Close
                    className="w-full bg-[#2C2C2E] text-gray-300 font-bold py-4 rounded-sm uppercase tracking-wider text-sm hover:bg-[#3a3a3c] transition-colors"
                >
                    SHOW RESULTS
                </button>
            </div>
        </div>
    );
};

export default FilterScreen;
