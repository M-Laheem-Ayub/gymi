import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Eye, EyeOff } from 'lucide-react';

const LoginPassword = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-screen w-screen bg-[#000000] text-[#FFFFFF] flex flex-col font-sans overflow-hidden items-center relative">
            {/* Header */}
            <div className="w-full px-6 pt-6 flex items-center justify-between">
                <button onClick={() => navigate('/login/email')} className="p-2 -ml-2">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </button>

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="font-bold tracking-[0.2em] text-lg">TONAL</span>
                </div>
                <div className="w-6" /> {/* Spacer */}
            </div>

            {/* Main Content */}
            <div className="flex-1 w-full px-8 flex flex-col mt-20">
                <h1 className="text-3xl font-bold mb-20 text-center leading-tight">
                    What's your password?
                </h1>

                <div className="w-full relative">
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#FFFFFF] mb-2 block">
                        PASSWORD
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full bg-transparent border-b border-[#FFFFFF] text-lg py-2 pr-10 focus:outline-none placeholder-gray-500 font-normal"
                        />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-0 bottom-3 text-white"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Forgot Password Link */}
            <div className="absolute bottom-32 left-0 w-full flex justify-center">
                <button
                    onClick={() => navigate('/login/forgot')}
                    className="text-sm font-bold text-white hover:text-gray-300 transition-colors"
                >
                    Forgot?
                </button>
            </div>

            {/* Floating Action Button (FAB) */}
            <div className="absolute bottom-10 left-0 w-full flex justify-center">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="w-16 h-16 bg-[#FFFFFF] rounded-full flex items-center justify-center transition-transform active:scale-95"
                >
                    <ArrowRight className="w-8 h-8 text-[#000000]" />
                </button>
            </div>
        </div>
    );
};

export default LoginPassword;
