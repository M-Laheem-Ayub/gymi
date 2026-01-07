import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeStep1 = () => {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black text-white font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/slide1.png"
                    alt="Background"
                    className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none">
                <div className="flex-1 flex flex-col justify-center items-center text-center pb-20 p-6">
                    <AnimatePresence>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-xs"
                        >
                            <div className="mb-6 flex flex-col items-center">
                                <div className="w-12 h-12 bg-white mb-2 rotate-45 transform"></div>
                                <h2 className="text-3xl font-bold tracking-[0.3em]">GYMI</h2>
                            </div>
                            <h1 className="text-5xl font-black uppercase leading-tight mb-8 whitespace-pre-line">
                                POWER{'\n'}PROGRESS
                            </h1>
                            <button
                                onClick={() => navigate('/welcome/2')}
                                className="pointer-events-auto border border-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
                            >
                                LEARN MORE ABOUT GYMI
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Indicators */}
                <div className="flex justify-center space-x-2 mb-8 pointer-events-auto">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <div
                            key={step}
                            className={`h-1 rounded-full transition-all duration-300 ${step === 1 ? 'w-8 bg-white' : 'w-4 bg-gray-600'}`}
                        />
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="w-full bg-black pointer-events-auto z-40">
                    <div className="grid grid-cols-2 gap-0 border-t border-gray-800">
                        <button onClick={() => navigate('/login/email')} className="py-6 text-center font-bold text-sm tracking-widest uppercase hover:bg-gray-900 transition-colors border-r border-gray-800 text-white">Log In</button>
                        <button onClick={() => navigate('/signup')} className="py-6 text-center font-bold text-sm tracking-widest uppercase hover:bg-gray-900 transition-colors text-white">Sign Up</button>
                    </div>
                </div>
            </div>

            {/* Navigation Taps */}
            <div className="absolute inset-y-0 right-0 w-1/3 z-20 cursor-pointer" onClick={() => navigate('/welcome/2')} />
        </div>
    );
};

export default WelcomeStep1;
