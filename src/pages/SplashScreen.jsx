import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SplashScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Navigate to Welcome screen after 3 seconds
        const timer = setTimeout(() => {
            navigate('/welcome');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden relative">
            {/* Background gradients for premium feel */}
            <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] bg-blue-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[70vw] h-[70vw] bg-purple-600/20 rounded-full blur-[100px]" />

            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center z-10"
            >
                <motion.h1
                    className="text-6xl font-black text-white tracking-tighter"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        GYMI
                    </span>
                </motion.h1>
                <motion.p
                    className="mt-4 text-gray-400 text-sm tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    Fitness Evolved
                </motion.p>
            </motion.div>
        </div>
    );
};

export default SplashScreen;
