import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SignupName = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');

    const isValid = firstName.trim() && lastName.trim() && username.trim();

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col p-6 font-sans overflow-y-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <button onClick={() => navigate('/signup/date')} className="p-2 -ml-2">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <span className="text-sm font-bold tracking-wide">Personal Info</span>
                <div className="w-6" />
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 h-1 mb-8 rounded-full overflow-hidden">
                <div className="w-full h-full bg-white rounded-full" />
            </div>

            {/* Main Content */}
            <div className="flex-1 pb-24">
                <h1 className="text-3xl font-bold mb-4 leading-tight">
                    What should
                    <br />
                    we call you?
                </h1>

                <p className="text-gray-400 text-sm mb-12 leading-relaxed">
                    Your username will be shown to other Gymi members on the leaderboard. You can change it at any time.
                </p>

                {/* Name Inputs - Row */}
                <div className="mb-12">
                    <div className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="First Name (e.g. Muhammad)"
                                className="w-full bg-transparent border-b border-gray-600 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Last Name (e.g. Ahmad)"
                                className="w-full bg-transparent border-b border-gray-600 py-3 text-lg focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Username Input */}
                <div className="relative mb-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400 absolute -top-5 left-0">
                        Username
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value.slice(0, 20))}
                        className="w-full bg-transparent border-b border-white py-2 text-xl font-medium focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>
                <div className="text-right text-gray-500 text-xs">
                    {username.length}/20
                </div>

            </div>

            {/* Footer Button - Fixed at bottom */}
            <div className="fixed bottom-0 left-0 w-full p-6 bg-black z-10">
                <button
                    onClick={() => console.log('Complete Signup')} // Placeholder for full completion or next step
                    disabled={!isValid}
                    className={`w-full py-4 font-bold text-sm tracking-widest uppercase transition-colors ${isValid
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

export default SignupName;
