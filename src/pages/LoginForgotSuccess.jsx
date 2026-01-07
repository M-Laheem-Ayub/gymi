import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const LoginForgotSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-screen bg-[#000000] text-[#FFFFFF] flex flex-col font-sans overflow-hidden items-center relative">
            {/* Background Content (Mimicking LoginForgot state but dimmed/blurred) */}
            <div className="opacity-30 pointer-events-none w-full h-full flex flex-col items-center">
                {/* Header */}
                <div className="w-full px-6 pt-6 flex items-center justify-between">
                    <button className="p-2 -ml-2">
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <div className="flex items-center gap-2">
                        <span className="font-bold tracking-[0.2em] text-lg">TONAL</span>
                    </div>
                    <div className="w-6" />
                </div>

                {/* Main Content */}
                <div className="flex-1 w-full px-8 flex flex-col mt-20">
                    <h1 className="text-3xl font-bold mb-4 text-center leading-tight">
                        Forgot your password?
                    </h1>
                    <p className="text-gray-400 text-center mb-20 text-sm">
                        We'll send a reset email
                    </p>

                    <div className="w-full">
                        <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#FFFFFF] mb-2 block">
                            EMAIL
                        </label>
                        <input
                            type="email"
                            defaultValue="nirtaza78@gmail.com"
                            className="w-full bg-transparent border-b border-[#FFFFFF] text-lg py-2 focus:outline-none"
                            readOnly
                        />
                    </div>
                </div>
                {/* FAB */}
                <div className="absolute bottom-10 left-0 w-full flex justify-center">
                    <div className="w-16 h-16 bg-[#FFFFFF] rounded-full flex items-center justify-center">
                        <ArrowRight className="w-8 h-8 text-[#000000]" />
                    </div>
                </div>
            </div>

            {/* Popup Overlay */}
            <div className="absolute inset-0 z-50 flex items-center justify-center px-8 bg-black/50 backdrop-blur-sm">
                <div className="bg-[#1c1c1e] w-full max-w-sm p-8 rounded-lg flex flex-col items-center text-center shadow-lg border border-gray-800">
                    <h2 className="text-2xl font-bold mb-4 text-white">
                        Success
                    </h2>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                        Check your inbox for instructions on<br />
                        how to reset your password
                    </p>

                    <button
                        onClick={() => navigate('/login/email')}
                        className="w-full bg-white text-black font-bold py-4 rounded text-xs tracking-widest uppercase hover:bg-gray-200 transition-colors"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForgotSuccess;
