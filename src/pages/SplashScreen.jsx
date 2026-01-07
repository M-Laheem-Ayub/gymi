import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


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

            <div className="flex flex-col items-center z-10">
                <h1 className="text-6xl font-black text-white tracking-tighter">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        GYMI
                    </span>
                </h1>
                <p className="mt-4 text-gray-400 text-sm tracking-widest uppercase">
                    Fitness Evolved
                </p>
            </div>
        </div>
    );
};

export default SplashScreen;
