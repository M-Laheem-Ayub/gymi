import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SignupGender = () => {
    const navigate = useNavigate();
    const [selectedGender, setSelectedGender] = useState('');

    const genderOptions = [
        'Male',
        'Female',
        'Non-binary',
        'Prefer not to say'
    ];

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col p-6 font-sans overflow-y-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <button onClick={() => navigate('/signup/location')} className="p-2 -ml-2">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <span className="text-sm font-bold tracking-wide">Personal Info</span>
                <div className="w-6" />
            </div>

            {/* Progress Bar - Approx 35% */}
            <div className="w-full bg-gray-800 h-1 mb-8 rounded-full overflow-hidden">
                <div className="w-[35%] h-full bg-white rounded-full" />
            </div>

            {/* Main Content */}
            <div className="flex-1 pb-24">
                <h1 className="text-3xl font-bold mb-4 leading-tight">
                    What is your gender?
                </h1>

                <p className="text-gray-400 text-sm mb-12 leading-relaxed">
                    This is used to help calculate your progress and recommendations.
                </p>

                {/* Gender Options */}
                <div className="space-y-4">
                    {genderOptions.map((option) => (
                        <button
                            key={option}
                            onClick={() => setSelectedGender(option)}
                            className={`w-full p-4 flex items-center justify-between rounded-md transition-colors ${selectedGender === option
                                ? 'bg-white text-black'
                                : 'bg-gray-900 text-white hover:bg-gray-800'
                                }`}
                        >
                            <span className="font-bold text-lg">{option}</span>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedGender === option
                                ? 'border-black'
                                : 'border-gray-600'
                                }`}>
                                {selectedGender === option && (
                                    <div className="w-3 h-3 bg-black rounded-full" />
                                )}
                            </div>
                        </button>
                    ))}
                </div>

            </div>

            {/* Footer Button - Fixed at bottom */}
            <div className="fixed bottom-0 left-0 w-full p-6 bg-black z-10">
                <button
                    onClick={() => navigate('/signup/body')}
                    disabled={!selectedGender}
                    className={`w-full py-4 font-bold text-sm tracking-widest uppercase transition-colors ${selectedGender
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SignupGender;
