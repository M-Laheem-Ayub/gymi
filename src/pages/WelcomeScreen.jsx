import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
    {
        type: 'intro',
        image: '/images/slide1.png',
        title: 'POWER\nPROGRESS',
        subtitle: '',
        cta: 'LEARN MORE ABOUT GYMI'
    },
    {
        type: 'content',
        image: '/images/slide2.png',
        title: 'SMART GYM IN YOUR MIRROR',
        description: 'Transform your home into a state-of-the-art gym. Gymi is an AI-powered smart mirror that blends perfectly into your home decor.'
    },
    {
        type: 'content',
        image: '/images/slide3.png',
        title: 'AI FORM CORRECTION',
        description: 'Gymi watches your movement in real-time and provides instant feedback to ensure you lift safely and effectively, just like a personal trainer.'
    },
    {
        type: 'content',
        image: '/images/slide4.png',
        title: 'REAL-TIME TRACKING',
        description: 'Gymi tracks your weight, reps, and sets automatically. Analyze your strength growth with detailed insights on your mobile app.'
    },
    {
        type: 'content',
        image: '/images/slide5.png',
        title: 'WORKOUTS FOR EVERY GOAL',
        description: 'From HIIT to Yoga, access hundreds of classes led by expert coaches tailored for every fitness level and goal.'
    }
];

const WelcomeScreen = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Preload images
    useEffect(() => {
        slides.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
        });
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black text-white font-sans">

            {/* Background Image Carousel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={slides[currentSlide].image}
                        alt="Background"
                        className="h-full w-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between">

                {/* Main Content Area with Padding */}
                <div className="flex-1 flex flex-col justify-between p-6 pb-0">
                    {/* Top Spacer / Logo Area */}
                    <div className="w-full flex justify-center mt-12">
                    </div>

                    {/* Middle Content */}
                    <div className="flex-1 flex flex-col justify-center items-center text-center pb-20 pointer-events-none">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="max-w-xs"
                            >
                                {slides[currentSlide].type === 'intro' ? (
                                    <>
                                        {/* Logo specific to Intro Slide */}
                                        <div className="mb-6 flex flex-col items-center">
                                            <div className="w-12 h-12 bg-white mb-2 rotate-45 transform"></div>
                                            <h2 className="text-3xl font-bold tracking-[0.3em]">GYMI</h2>
                                        </div>
                                        <h1 className="text-5xl font-black uppercase leading-tight mb-8 whitespace-pre-line">
                                            {slides[currentSlide].title}
                                        </h1>
                                        <button className="pointer-events-auto border border-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                                            {slides[currentSlide].cta}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <h1 className="text-3xl font-black uppercase leading-tight mb-6">
                                            {slides[currentSlide].title}
                                        </h1>
                                        <p className="text-sm leading-relaxed text-gray-200">
                                            {slides[currentSlide].description}
                                        </p>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Indicators */}
                    <div className="flex justify-center space-x-2 mb-8 pointer-events-auto">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-1 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-white' : 'w-4 bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Black Box Section */}
                <div className="w-full bg-black pointer-events-auto z-40">
                    <div className="grid grid-cols-2 gap-0 border-t border-gray-800">
                        <button
                            onClick={() => navigate('/login/email')}
                            className="py-6 text-center font-bold text-sm tracking-widest uppercase hover:bg-gray-900 transition-colors border-r border-gray-800 text-white"
                        >
                            Log In
                        </button>
                        <button
                            onClick={() => navigate('/signup')}
                            className="py-6 text-center font-bold text-sm tracking-widest uppercase hover:bg-gray-900 transition-colors text-white"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* Tap areas for navigation */}
            <div className="absolute inset-y-0 left-0 w-1/3 z-20 cursor-pointer" onClick={prevSlide} />
            <div className="absolute inset-y-0 right-0 w-1/3 z-20 cursor-pointer" onClick={nextSlide} />

        </div>
    );
};

export default WelcomeScreen;
