import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DeleteAccount = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white animate-fade-in flex flex-col items-center">
            {/* Header */}
            <div className="w-full flex items-center p-4 relative mb-20">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute left-4 p-2"
                >
                    <ArrowLeft size={24} />
                </button>
                <h1 className="w-full text-center text-lg font-bold">Delete account</h1>
            </div>

            {/* Content */}
            <div className="flex-1 px-8 flex flex-col items-center text-center max-w-md">
                <h2 className="text-2xl font-bold mb-6 leading-tight">
                    Request to Delete<br />Account
                </h2>

                <p className="text-gray-400 text-base leading-relaxed mb-16">
                    When your account is deleted, you will no longer have access to data, and data will not be restored if you sign up again.
                </p>

                <button className="text-[#FF0000] text-xs font-bold uppercase tracking-[0.15em] mb-20 hover:text-red-400 transition-colors">
                    Request Account Deletion
                </button>

                <div className="text-gray-400 space-y-1">
                    <p className="text-base mb-2">Or contact customer care</p>
                    <p className="text-white text-lg font-bold">(855) 698-6625</p>
                    <a href="#" className="text-white text-base underline underline-offset-4 decoration-1">
                        gymi.pk/contact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DeleteAccount;
