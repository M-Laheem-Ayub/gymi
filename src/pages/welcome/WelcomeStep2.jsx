import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeStep2 = () => {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black text-white font-sans">
            <div className="absolute inset-0 z-0">
                <img src="/images/slide2.png" alt="Background" className="h-full w-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            </div>

            <div className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none">
                <div className="flex-1 flex flex-col justify-center items-center text-center pb-20 p-6">
                    <AnimatePresence>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-xs"
                        >
                            <h1 className="text-3xl font-black uppercase leading-tight mb-6">
                                SMART GYM IN YOUR MIRROR
                            </h1>
                            <p className="text-sm leading-relaxed text-gray-200">
                                Transform your home into a state-of-the-art gym. Gymi is an AI-powered smart mirror that blends perfectly into your home decor.
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center space-x-2 mb-8 pointer-events-auto">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <div key={step} className={`h-1 rounded-full transition-all duration-300 ${step === 2 ? 'w-8 bg-white' : 'w-4 bg-gray-600'}`} />
                    ))}
                </div>

                <div className="w-full bg-black pointer-events-auto z-40">
                    <div className="grid grid-cols-2 gap-0 border-t border-gray-800">
                        <button onClick={() => navigate('/login/email')} className="py-6 text-center font-bold text-sm tracking-widest uppercase hover:bg-gray-900 transition-colors border-r border-gray-800 text-white">Log In</button>
                        <button onClick={() => navigate('/signup')} className="py-6 text-center font-bold text-sm tracking-widest uppercase hover:bg-gray-900 transition-colors text-white">Sign Up</button>
                    </div>
                </div>
            </div>

            <div className="absolute inset-y-0 left-0 w-1/3 z-20 cursor-pointer" onClick={() => navigate('/welcome/1')} />
            <div className="absolute inset-y-0 right-0 w-1/3 z-20 cursor-pointer" onClick={() => navigate('/welcome/3')} />
        </div>
    );
};

export default WelcomeStep2;
