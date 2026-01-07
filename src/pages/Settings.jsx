import { QrCode, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Settings = () => {
    const navigate = useNavigate();
    const settingsItems = [
        "Account",
        "Body & Health",
        "Preferences",
        "Social Privacy",
        "Push Notifications",
        "Connected Apps",
        "Refer Gymi",
        "Gymi Smart View",
        "Help",
        "Legal",
        "Gymi Accessories"
    ];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col pb-24 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between p-4 pt-8">
                <div className="w-6"></div> {/* Spacer for centering */}
                <h1 className="text-lg font-bold">Settings</h1>
                <button onClick={() => navigate('/settings/qr')}>
                    <QrCode className="text-white" size={24} />
                </button>
            </div>

            {/* Profile Section */}
            <div
                onClick={() => navigate('/profile')}
                className="px-4 py-6 border-b border-gray-900 flex items-center gap-4 cursor-pointer hover:bg-gray-900/50 transition-colors"
            >
                <div className="w-12 h-12 rounded-full bg-[#2ECC71] flex items-center justify-center text-black font-bold text-xl">
                    L
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-bold">Laheem42</h2>
                    <p className="text-gray-500 text-sm">View Public Profile</p>
                </div>
                <ChevronRight className="text-gray-600" size={20} />
            </div>

            {/* Settings List */}
            <div className="flex-1">
                {settingsItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            if (item === "Account") navigate('/settings/account');
                            if (item === "Push Notifications") navigate('/settings/notifications');
                        }}
                        className="flex items-center justify-between p-4 border-b border-gray-900 cursor-pointer hover:bg-gray-900/30 transition-colors"
                    >
                        <span className="text-base font-medium">{item}</span>
                        <ChevronRight className="text-gray-600" size={20} />
                    </div>
                ))}
                <div className="flex justify-between items-center py-4 border-b border-gray-800">
                    <span className="text-base font-bold">About Gymi</span>
                    <ChevronRight className="text-gray-500" />
                </div>
            </div>

            <Navbar />
        </div>
    );
};

export default Settings;
