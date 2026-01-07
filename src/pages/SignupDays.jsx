import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SignupDays = () => {
    const navigate = useNavigate();
    const [selectedDay, setSelectedDay] = useState(4);
    const days = [2, 3, 4, 5, 6, 7];

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col font-sans overflow-hidden">
            {/* Header */}
            <div className="px-6 pt-6 pb-2">
                <div className="flex items-center justify-between mb-8">
                    <button onClick={() => navigate('/signup/experience')} className="p-2 -ml-2">
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <span className="text-sm font-bold tracking-wide">Fitness Profile</span>
                    <div className="w-6" />
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-800 h-1 mb-8 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-white rounded-full" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4 text-center leading-tight">
                    How often do you plan on using Tonal?
                </h1>
                <p className="text-gray-400 text-center text-sm max-w-xs mb-20">
                    You can work out as often as you'd like.
                    This will be used to help create recommendations.
                </p>

                <div className="w-full flex-1 flex flex-col items-center justify-top">
                    <p className="text-sm font-bold tracking-widest uppercase mb-12 text-white">
                        DAYS PER WEEK
                    </p>

                    <div className="flex items-center justify-between w-full max-w-xs px-4">
                        {days.map((day) => {
                            // Simple logic to show neighbors
                            const isSelected = selectedDay === day;
                            const isNeighbor = Math.abs(selectedDay - day) === 1;
                            const isFar = Math.abs(selectedDay - day) > 1;

                            // In a real carousel we'd hide far items or scroll, 
                            // but for 6 items and the screenshot look, we can just dim them heavily
                            // The screenshot shows focused number very large, neighbors smaller and grey

                            return (
                                <button
                                    key={day}
                                    onClick={() => setSelectedDay(day)}
                                    className={`transition-all duration-300 flex flex-col items-center ${isSelected
                                        ? 'text-7xl font-bold text-white scale-125 mx-4'
                                        : isNeighbor
                                            ? 'text-4xl font-bold text-gray-600 mx-2'
                                            : 'text-2xl font-bold text-gray-800 mx-1'
                                        }`}
                                >
                                    {day}
                                </button>
                            );
                        })}
                    </div>

                    {/* Recommended Label - appearing when 3 or 4 is selected in some logic, 
                        but screenshot shows it under 4 specifically. 
                        Let's show it if it matches some criteria or just fixed for now?
                        Screenshot 2 shows '4' with RECOMMENDED. Screenshot 1 shows '5' without.
                    */}
                    <div className="h-8 mt-8">
                        {selectedDay === 4 && (
                            <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                                Recommended
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer Button */}
            <div className="fixed bottom-0 left-0 w-full p-6 bg-black z-50">
                <button
                    onClick={() => navigate('/signup/verify-email')}
                    className="w-full py-4 font-bold text-sm tracking-widest uppercase transition-colors bg-white text-black hover:bg-gray-200"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SignupDays;
