import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

const SignupDate = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [age, setAge] = useState(null);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);

        // Calculate Age
        if (newDate) {
            const birthDate = new Date(newDate);
            const today = new Date();
            let calculatedAge = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                calculatedAge--;
            }
            setAge(calculatedAge);
        } else {
            setAge(null);
        }
    };

    const isValid = date && acceptedTerms && acceptedPrivacy;

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col p-6 font-sans">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <span className="text-sm font-bold tracking-wide">Personal Info</span>
                <div className="w-6" />
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 h-1 mb-8 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-white rounded-full" />
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-12 leading-tight">
                    What's your
                    <br />
                    date of birth?
                </h1>

                <div className="relative mb-8">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400 absolute -top-5 left-0">
                        Date of Birth
                    </label>
                    <div className="flex items-center border-b border-white py-2">
                        <input
                            type="date"
                            value={date}
                            onChange={handleDateChange}
                            className="w-full bg-transparent text-xl font-medium focus:outline-none focus:border-blue-500 transition-colors appearance-none text-white [&::-webkit-calendar-picker-indicator]:invert"
                            placeholder="mm/dd/yyyy"
                        />
                        {age !== null && (
                            <span className="text-gray-400 text-lg ml-4 whitespace-nowrap">
                                {age} years
                            </span>
                        )}
                    </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-6 mt-12">
                    {/* Terms */}
                    <div className="flex items-start gap-4">
                        <button
                            onClick={() => setAcceptedTerms(!acceptedTerms)}
                            className={`w-6 h-6 rounded flex-shrink-0 flex items-center justify-center border transition-colors ${acceptedTerms ? 'bg-gray-600 border-gray-600' : 'bg-gray-800 border-gray-600'}`}
                        >
                            {acceptedTerms && <Check className="w-4 h-4 text-white" />}
                        </button>
                        <p className="text-gray-300 text-sm leading-snug pt-0.5">
                            I agree to the <span className="underline font-bold text-white">Terms of Service</span>
                        </p>
                    </div>

                    {/* Privacy */}
                    <div className="flex items-start gap-4">
                        <button
                            onClick={() => setAcceptedPrivacy(!acceptedPrivacy)}
                            className={`w-6 h-6 rounded flex-shrink-0 flex items-center justify-center border transition-colors ${acceptedPrivacy ? 'bg-gray-600 border-gray-600' : 'bg-gray-800 border-gray-600'}`}
                        >
                            {acceptedPrivacy && <Check className="w-4 h-4 text-white" />}
                        </button>
                        <p className="text-gray-300 text-sm leading-snug pt-0.5">
                            I acknowledge I have read the <span className="underline font-bold text-white">Privacy Policy</span> and the <span className="underline font-bold text-white">Consumer Health Data Privacy Policy</span> (if applicable)
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Button - Fixed at bottom */}
            <div className="mt-auto">
                <button
                    onClick={() => navigate('/signup/name')}
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

export default SignupDate;
