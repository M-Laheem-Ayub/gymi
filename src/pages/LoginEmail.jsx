import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const LoginEmail = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-screen bg-[#000000] text-[#FFFFFF] flex flex-col font-sans overflow-hidden items-center relative">
            {/* Header */}
            <div className="w-full px-6 pt-6 flex items-center justify-between">
                <button onClick={() => navigate('/welcome')} className="p-2 -ml-2">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </button>

                {/* Logo - Text based for now to match screenshot "TONAL" */}
                <div className="flex items-center gap-2">
                    {/* Simple Icon placeholder if needed, using text for now as per previous screens or just text */}
                    <span className="font-bold tracking-[0.2em] text-lg">TONAL</span>
                </div>
                <div className="w-6" /> {/* Spacer for centering */}
            </div>

            {/* Main Content */}
            <div className="flex-1 w-full px-8 flex flex-col mt-20">
                <h1 className="text-3xl font-bold mb-20 text-center leading-tight">
                    What's your email<br />address?
                </h1>

                <div className="w-full">
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#FFFFFF] mb-2 block">
                        EMAIL
                    </label>
                    <input
                        type="email"
                        defaultValue="nirtaza78@gmail.com"
                        className="w-full bg-transparent border-b border-[#FFFFFF] text-lg py-2 focus:outline-none placeholder-gray-500 font-normal"
                    />
                </div>
            </div>

            {/* Floating Action Button (FAB) */}
            <div className="absolute bottom-10 left-0 w-full flex justify-center">
                <button
                    onClick={() => navigate('/login/password')}
                    className="w-16 h-16 bg-[#FFFFFF] rounded-full flex items-center justify-center transition-transform active:scale-95"
                >
                    <ArrowRight className="w-8 h-8 text-[#000000]" />
                </button>
            </div>
        </div>
    );
};

export default LoginEmail;
