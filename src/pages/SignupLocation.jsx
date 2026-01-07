import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';

const SignupLocation = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');

    const isValid = location.trim().length > 0;

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col p-6 font-sans overflow-y-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <button onClick={() => navigate('/signup/name')} className="p-2 -ml-2">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <span className="text-sm font-bold tracking-wide">Personal Info</span>
                <div className="w-6" />
            </div>

            {/* Progress Bar - Matching screenshot width approx 25% */}
            <div className="w-full bg-gray-800 h-1 mb-8 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-white rounded-full" />
            </div>

            {/* Main Content */}
            <div className="flex-1 pb-24">
                <h1 className="text-3xl font-bold mb-4 leading-tight">
                    What's your
                    <br />
                    location?
                </h1>

                <p className="text-gray-400 text-sm mb-12 leading-relaxed">
                    This will be seen by other Gymi members. You can change it at any time.
                </p>

                {/* Location Input */}
                <div className="relative">
                    <MapPin className="absolute left-0 top-3 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="e.g. Lahore, Karachi, Islamabad"
                        className="w-full bg-transparent border-b border-gray-600 py-2 pl-8 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                <div className="mt-8">
                    <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
                        <MapPin size={14} />
                        Use Current Location
                    </button>
                </div>
                <div className="text-right text-gray-500 text-xs">
                    {location.length}/30
                </div>

            </div>

            {/* Footer Button - Fixed at bottom */}
            <div className="fixed bottom-0 left-0 w-full p-6 bg-black z-10">
                <button
                    onClick={() => console.log('Navigate to Verify Email or Next')}
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

export default SignupLocation;
