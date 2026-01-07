import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SignupExperience = () => {
    const navigate = useNavigate();
    const [selectedLevel, setSelectedLevel] = useState('intermediate');

    const levels = [
        {
            id: 'beginner',
            title: 'Beginner',
            desc: 'I may have strength trained before, but it\'s been awhile and I need plenty of guidance.'
        },
        {
            id: 'intermediate',
            title: 'Intermediate',
            desc: 'I am comfortable with strength training, but I still have lots to learn.'
        },
        {
            id: 'advanced',
            title: 'Advanced',
            desc: 'I have been strength training multiple days a week recently and am ready to continue pushing myself.'
        }
    ];

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col font-sans overflow-hidden">
            {/* Header */}
            <div className="px-6 pt-6 pb-2">
                <div className="flex items-center justify-between mb-8">
                    <button onClick={() => navigate('/signup/goal')} className="p-2 -ml-2">
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
            <div className="flex-1 px-6 overflow-y-auto pb-32 no-scrollbar">
                <h1 className="text-3xl font-bold mb-4 text-center leading-tight">
                    What's your experience level?
                </h1>
                <p className="text-gray-400 text-center mb-10 text-sm">
                    Tonal uses your experience level to recommend workouts and programs.
                </p>

                <div className="flex flex-col gap-4">
                    {levels.map((level) => (
                        <button
                            key={level.id}
                            onClick={() => setSelectedLevel(level.id)}
                            className={`w-full p-6 text-left rounded-lg transition-all duration-200 flex items-center justify-between group ${selectedLevel === level.id
                                ? 'bg-[#FFFFFF] text-[#000000]'
                                : 'bg-[#1c1c1e] text-[#FFFFFF] hover:bg-[#2c2c2e]'
                                }`}
                        >
                            <div className="flex-1 pr-4">
                                <h3 className="text-lg font-bold mb-2">{level.title}</h3>
                                <p className={`text-sm leading-relaxed ${selectedLevel === level.id ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
                                    }`}>
                                    {level.desc}
                                </p>
                            </div>

                            {/* Radio Circle */}
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selectedLevel === level.id
                                ? 'border-[#000000]'
                                : 'border-[#4B5563]'
                                }`}>
                                {selectedLevel === level.id && (
                                    <div className="w-3 h-3 bg-[#000000] rounded-full" />
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Footer Button */}
            <div className="fixed bottom-0 left-0 w-full p-6 bg-black z-50">
                <button
                    onClick={() => navigate('/signup/days')}
                    className="w-full py-4 font-bold text-sm tracking-widest uppercase transition-colors bg-white text-black hover:bg-gray-200"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SignupExperience;
