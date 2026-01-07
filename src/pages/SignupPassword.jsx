import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, Check, X, Minus } from 'lucide-react';

const SignupPassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [validations, setValidations] = useState({
        length: false,
        noRepeated: false,
        complexity: false,
        types: {
            lower: false,
            upper: false,
            number: false,
            special: false
        }
    });

    useEffect(() => {
        // 1. At least 8 characters
        const lengthValid = password.length >= 8;

        // 2. No more than 2 identical characters in a row
        const noRepeatedValid = !/(.)\1\1/.test(password);

        // 3. Contains at least 3 of the 4 types
        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        // Count exact types for "3 of 4" rule
        const typesCount = [hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;
        const complexityValid = typesCount >= 3;

        setValidations({
            length: lengthValid,
            noRepeated: noRepeatedValid,
            complexity: complexityValid,
            types: {
                lower: hasLower,
                upper: hasUpper,
                number: hasNumber,
                special: hasSpecial
            }
        });

    }, [password]);

    const allValid = validations.length && validations.noRepeated && validations.complexity;
    const isDirty = password.length > 0;

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col p-6 font-sans overflow-y-auto">

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
                <div className="w-2/4 h-full bg-white rounded-full" />
            </div>

            {/* Main Content */}
            <div className="flex-1 pb-24">
                <h1 className="text-3xl font-bold mb-12 leading-tight">
                    What's your
                    <br />
                    password?
                </h1>

                <div className="relative mb-12">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400 absolute -top-5 left-0">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-transparent border-b border-white py-2 text-xl font-medium focus:outline-none focus:border-blue-500 transition-colors pr-10 font-mono"
                            autoFocus
                        />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Validation Rules */}
                <div className="space-y-4">
                    <h3 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Must Contain</h3>

                    {/* Rule 1: Length */}
                    <div className="flex items-start gap-3">
                        <ValidationIcon isValid={validations.length} isDirty={isDirty} />
                        <span className={`text-sm ${validations.length ? 'text-gray-200' : 'text-gray-400'}`}>
                            At least 8 characters in length
                        </span>
                    </div>

                    {/* Rule 2: Repeated Chars */}
                    <div className="flex items-start gap-3">
                        <ValidationIcon isValid={validations.noRepeated} isDirty={isDirty} />
                        <span className={`text-sm ${validations.noRepeated ? 'text-gray-200' : 'text-gray-400'}`}>
                            No more than 2 identical characters in a row
                        </span>
                    </div>

                    {/* Rule 3: Complexity */}
                    <div className="flex items-start gap-3">
                        <ValidationIcon isValid={validations.complexity} isDirty={isDirty} />
                        <div className="flex flex-col">
                            <span className={`text-sm mb-3 ${validations.complexity ? 'text-gray-200' : 'text-gray-400'}`}>
                                Contains at least 3 of the following 4 types of characters:
                            </span>
                            <ul className="space-y-3 pl-1">
                                <ComplexityItem label="Lower case letters (a-z)" isValid={validations.types.lower} />
                                <ComplexityItem label="Upper case letters (A-Z)" isValid={validations.types.upper} />
                                <ComplexityItem label="Numbers (i.e. 0-9)" isValid={validations.types.number} />
                                <ComplexityItem label="Special characters (e.g. !@#$%^&*)" isValid={validations.types.special} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Button - Fixed at bottom */}
            <div className="fixed bottom-0 left-0 w-full p-6 bg-black z-10">
                <button
                    onClick={() => navigate('/signup/date')}
                    disabled={!allValid}
                    className={`w-full py-4 font-bold text-sm tracking-widest uppercase transition-colors ${allValid
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

// Validation Icons based on screenshot logic
// Green Check if Valid
// Red X if Invalid AND User has started typing (isDirty)
// Grey Dash if Invalid AND User hasn't started typing
const ValidationIcon = ({ isValid, isDirty }) => {
    if (isValid) return <Check className="w-5 h-5 text-green-500 shrink-0" />;
    if (!isValid && isDirty) return <X className="w-5 h-5 text-red-500 shrink-0" />;
    return <div className="w-4 h-0.5 bg-gray-600 mt-2 shrink-0" />; // Dash
};

const ComplexityItem = ({ label, isValid }) => (
    <li className="flex items-center gap-3">
        {isValid ? <Check className="w-4 h-4 text-green-500 shrink-0" /> : <div className="w-4 h-0.5 bg-gray-600 shrink-0" />}
        <span className={`text-sm ${isValid ? 'text-gray-300' : 'text-gray-500'}`}>{label}</span>
    </li>
);

export default SignupPassword;
