import { X, QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QRScanner = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center animate-fade-in">
            {/* Close Button */}
            <button
                onClick={() => navigate(-1)}
                className="absolute top-6 left-4 p-2 z-20"
            >
                <X size={28} strokeWidth={2.5} />
            </button>

            {/* Camera View Placeholder - Using a dark gradient/image to simulate low light camera feed */}
            <div className="absolute inset-0 bg-[#0a0a0a] z-0">
                {/* Optional: You could add a blurry background image here to simulate camera */}
            </div>

            {/* Scanning Overlay */}
            <div className="relative z-10 flex flex-col items-center w-full px-12">
                {/* Reticle Corners */}
                <div className="w-64 h-64 relative mb-12">
                    {/* Top Left */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-400 rounded-tl-sm"></div>
                    {/* Top Right */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-400 rounded-tr-sm"></div>
                    {/* Bottom Left */}
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-400 rounded-bl-sm"></div>
                    {/* Bottom Right */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-400 rounded-br-sm"></div>
                </div>

                {/* Instruction Text */}
                <p className="text-center text-lg font-medium leading-relaxed max-w-xs">
                    Scan '
                    <span className="inline-flex items-center align-middle mx-1">
                        <QrCode size={18} strokeWidth={2.5} />
                    </span>
                    ' on your Tonal's Sign In screen to log in on your Tonal.
                </p>
            </div>
        </div>
    );
};

export default QRScanner;
