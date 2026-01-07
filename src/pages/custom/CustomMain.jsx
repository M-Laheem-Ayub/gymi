import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const CustomMain = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white flex flex-col relative">
            {/* Header */}
            <div className="p-6 pt-12">
                <h1 className="text-4xl font-bold tracking-tight">Custom</h1>
            </div>

            {/* Empty State Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center pb-32">
                <h2 className="text-2xl font-bold mb-4">Create your own!</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Choose your moves.<br />
                    Add reps, sets, and more.<br />
                    Name it. Save it. Play it on repeat.
                </p>
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-24 right-6">
                <button
                    onClick={() => navigate('/custom/builder')}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-200 transition-colors"
                >
                    <Plus size={32} strokeWidth={2.5} />
                </button>
            </div>

            {/* Bottom Navigation */}
            <Navbar />
        </div>
    );
};

export default CustomMain;
