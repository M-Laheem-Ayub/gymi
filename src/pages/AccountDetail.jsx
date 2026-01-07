import { Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AccountDetail = () => {
    const navigate = useNavigate();

    // Reusable Input Component to ensure consistent styling
    const InputField = ({ label, value, placeholder, charCount, maxChar }) => (
        <div className="mb-6">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{label}</label>
            <input
                type="text"
                defaultValue={value}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-gray-700 pb-2 text-lg text-white outline-none focus:border-white transition-colors"
            />
            {charCount && (
                <div className="text-right text-xs text-gray-500 mt-1">{charCount}/{maxChar}</div>
            )}
        </div>
    );

    // Reusable Row for "Change" items
    const ChangeRow = ({ label, value, isPassword }) => (
        <div className="mb-8">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{label}</label>
            <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400 text-lg">
                    {isPassword ? '••••••••' : value}
                </span>
                <button className="font-bold text-white text-sm">Change</button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-black text-white p-4 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between pt-4 mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="text-gray-300 text-lg"
                >
                    Cancel
                </button>
                <h1 className="text-lg font-bold">Account</h1>
                <button className="text-gray-300 text-lg">Save</button>
            </div>

            {/* Form Fields */}
            <div className="flex gap-4 mb-2">
                <div className="flex-1">
                    <InputField label="FIRST" value="Laheem" />
                </div>
                <div className="flex-1">
                    <InputField label="LAST" value="Ayub" />
                </div>
            </div>

            <InputField label="USERNAME" value="Laheem42" charCount="8" maxChar="20" />

            <InputField label="LOCATION" value="L" charCount="1" maxChar="30" />

            <div className="mt-8">
                <ChangeRow label="EMAIL" value="laheem.ayub.dev@gmail.com" />
                <ChangeRow label="PASSWORD" isPassword={true} />
            </div>

            {/* Primary Device */}
            <div className="mt-8">
                <div className="flex justify-between items-center py-4 border-b border-gray-800">
                    <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Primary Device</div>
                        <div className="text-lg font-bold">Gymi 1</div>
                    </div>
                </div>

                <div className="flex justify-between items-center py-4 border-b border-gray-800">
                    <span className="text-gray-400 text-lg">Gymi 1</span>
                    <button className="font-bold text-white text-sm">Change</button>
                </div>
            </div>

            {/* Delete Account Link */}
            <div className="mt-12 mb-8 text-center">
                <button
                    onClick={() => navigate('/settings/account/delete')}
                    className="text-red-500 text-sm font-bold uppercase tracking-widest hover:text-red-400"
                >
                    Delete Account
                </button>
            </div>
        </div>
    );
};

export default AccountDetail;
