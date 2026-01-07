import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PushNotifications = () => {
    const navigate = useNavigate();

    // Reusable Toggle Row Component
    const ToggleRow = ({ title, description, initialValue = true }) => {
        const [isOn, setIsOn] = useState(initialValue);

        return (
            <div className="py-6 border-b border-gray-900 flex items-center justify-between">
                <div className="pr-4">
                    <h3 className="text-base font-bold mb-1 text-white">{title}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>

                {/* Custom Toggle Switch */}
                <button
                    onClick={() => setIsOn(!isOn)}
                    className={`w-12 h-7 rounded-full relative transition-colors duration-200 ease-in-out flex-shrink-0 ${isOn ? 'bg-[#2ECC71]' : 'bg-gray-600'}`}
                >
                    <div
                        className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${isOn ? 'translate-x-5' : 'translate-x-0'}`}
                    ></div>
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-black text-white animate-fade-in p-4">
            {/* Header */}
            <div className="flex items-center gap-4 mb-2 pt-4">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2">
                    <ArrowLeft size={24} />
                </button>
                <h1 className="text-lg font-bold">Push Notifications</h1>
            </div>

            {/* Description Text */}
            <p className="text-center text-gray-300 text-lg font-medium leading-relaxed mt-8 mb-12 px-4">
                Get workout reminders and motivational messages to keep you on track
            </p>

            {/* Toggles List */}
            <div>
                <ToggleRow
                    title="Workout Summaries"
                    description="Send me my stats and monthly reviews."
                />
                <ToggleRow
                    title="Workout Reminders"
                    description="Never miss a workout."
                />
                <ToggleRow
                    title="Product Updates"
                    description="Receive Tonal announcements."
                />
                <ToggleRow
                    title="Social Activity"
                    description="Get notified when someone follows you or reacts to your workouts."
                />
                <ToggleRow
                    title="Articles"
                    description="Keep me in the loop on the latest articles."
                />
            </div>
        </div>
    );
};

export default PushNotifications;
