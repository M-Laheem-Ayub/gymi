import { ArrowLeft, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConnectionScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white flex flex-col font-sans animate-fade-in relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center p-4 pt-6 relative md:justify-center">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors md:left-8"
                >
                    <ArrowLeft size={24} />
                </button>
                <h1 className="text-lg font-bold w-full text-center">Gymi Smart View</h1>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 pb-32 text-center">

                <h2 className="text-3xl font-bold mb-6 leading-tight">
                    Searching for your<br />Gymi
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-16">
                    Make sure your Gymi is turned on, you are signed in, and connected to the same Wi-Fi network as your mobile device
                </p>

                {/* Spinner / Visual */}
                <div className="relative w-32 h-32 flex items-center justify-center mb-16">
                    {/* Ring Background */}
                    <div className="absolute inset-0 rounded-full border border-gray-800"></div>

                    {/* Active Spinner Segment */}
                    <div className="absolute inset-0 rounded-full border border-transparent border-t-[#2ECC71] border-r-[#2ECC71] animate-spin-slow" style={{ borderWidth: '2px' }}></div>

                    {/* Icon Circle */}
                    <div className="w-16 h-16 bg-black flex items-center justify-center z-10">
                        <Smartphone size={32} className="text-white" strokeWidth={1.5} />
                    </div>
                </div>

                <p className="text-gray-500 text-sm font-medium animate-pulse">
                    This may take a brief moment...
                </p>
            </div>

            {/* Overlay Gradient for polish */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        </div>
    );
};

export default ConnectionScreen;
