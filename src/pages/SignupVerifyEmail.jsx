import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

const SignupVerifyEmail = () => {
    const navigate = useNavigate();

    // In a real app, these would come from state/context
    const username = "Laheem42";
    const email = "laheem.ayub.dev@gmail.com";

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col font-sans overflow-hidden">
            {/* Header */}
            <div className="px-6 pt-6 pb-2">
                <div className="flex items-center justify-between mb-8">
                    <button onClick={() => navigate('/signup/days')} className="p-2 -ml-2">
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <span className="text-sm font-bold tracking-wide">Create Account</span>
                    <div className="w-6" />
                </div>

                {/* Progress Bar - Full */}
                <div className="w-full bg-gray-800 h-1 mb-8 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-white rounded-full" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 flex flex-col items-center justify-center -mt-20">
                <h1 className="text-3xl font-bold mb-12 text-center leading-tight">
                    Verify your account,<br />
                    {username}
                </h1>

                {/* Avatar Graphic */}
                <div className="relative mb-12">
                    {/* Outer glow/ring effects - simplistic approximations */}
                    <div className="w-48 h-48 rounded-full bg-[#1c1c1e] flex items-center justify-center relative z-0">
                        <div className="w-40 h-40 rounded-full bg-[#2c2c2e] flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-[#50E397] flex items-center justify-center text-black text-5xl font-bold">
                                L
                            </div>
                        </div>
                    </div>

                    {/* Checkmark Badge */}
                    <div className="absolute bottom-2 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10">
                        <Check className="w-6 h-6 text-black" strokeWidth={3} />
                    </div>
                </div>

                <p className="text-gray-400 text-center mb-6 text-sm max-w-xs">
                    A verification email has been sent<br />
                    to {email}
                </p>

                <p className="text-gray-500 text-center text-sm max-w-xs px-4">
                    We've sent a verification link to your email. Please click specifically on the link to verify your Gymi account.
                </p>
            </div>

            {/* Footer Button */}
            <div className="fixed bottom-0 left-0 w-full p-6 bg-black z-50">
                <button
                    onClick={() => navigate('/welcome')}
                    className="w-full py-4 font-bold text-sm tracking-widest uppercase transition-colors bg-white text-black hover:bg-gray-200"
                >
                    LET'S GET MOVING
                </button>
            </div>
        </div>
    );
};

export default SignupVerifyEmail;
