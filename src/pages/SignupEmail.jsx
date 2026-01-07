import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

const SignupEmail = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [newsletter, setNewsletter] = useState(true);

    const isValidEmail = email.includes('@') && email.includes('.');

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col p-6 font-sans">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <span className="text-sm font-bold tracking-wide">Personal Info</span>
                <div className="w-6" /> {/* Spacer for centering */}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 h-1 mb-12 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-white rounded-full" />
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-12 leading-tight">
                    What's your
                    <br />
                    email address?
                </h1>

                <div className="relative mb-12">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400 absolute -top-5 left-0">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-b border-white py-2 text-xl font-medium focus:outline-none focus:border-blue-500 transition-colors"
                        autoFocus
                    />
                </div>

                <div className="flex items-start gap-4">
                    <button
                        onClick={() => setNewsletter(!newsletter)}
                        className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${newsletter ? 'bg-gray-600 border-gray-600' : 'border-gray-500'}`}
                    >
                        {newsletter && <Check className="w-4 h-4 text-white" />}
                    </button>
                    <p className="text-gray-400 text-sm leading-snug flex-1">
                        Be the first to know about new features, workouts, and membership perks.
                    </p>
                </div>
            </div>

            {/* Footer Button */}
            <div className="mt-auto">
                <button
                    onClick={() => navigate('/signup/password')}
                    disabled={!isValidEmail}
                    className={`w-full py-4 font-bold text-sm tracking-widest uppercase transition-colors ${isValidEmail
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

export default SignupEmail;
