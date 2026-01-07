import { useState, useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SignupBody = () => {
    const navigate = useNavigate();
    // State
    const [heightTotalInches, setHeightTotalInches] = useState(72); // 6'0"
    const [weight, setWeight] = useState(153);

    // Refs for scrolling
    const heightScrollRef = useRef(null);
    const weightScrollRef = useRef(null);

    // Constants
    const RULER_UNIT_WIDTH = 12; // pixels per unit (inch/lb) visual gap
    const HEIGHT_MIN = 48; // 4'0"
    const HEIGHT_MAX = 96; // 8'0"

    const WEIGHT_MIN = 50;
    const WEIGHT_MAX = 300;

    // Initialize Scroll Positions
    useLayoutEffect(() => {
        if (heightScrollRef.current) {
            // Calculate initial scroll position
            const initialScroll = (66 - HEIGHT_MIN) * RULER_UNIT_WIDTH;
            heightScrollRef.current.scrollLeft = initialScroll;
        }
        if (weightScrollRef.current) {
            const initialScroll = (150 - WEIGHT_MIN) * RULER_UNIT_WIDTH;
            weightScrollRef.current.scrollLeft = initialScroll;
        }
    }, []);

    // Sync Scroll to State (Height)
    const handleHeightScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        // Calculate value based on scroll position
        const newValue = Math.round(scrollLeft / RULER_UNIT_WIDTH) + HEIGHT_MIN;
        if (newValue !== heightTotalInches && newValue >= HEIGHT_MIN && newValue <= HEIGHT_MAX) {
            setHeightTotalInches(newValue);
        }
    };

    // Sync Scroll to State (Weight)
    const handleWeightScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        const newValue = Math.round(scrollLeft / RULER_UNIT_WIDTH) + WEIGHT_MIN;
        if (newValue !== weight && newValue >= WEIGHT_MIN && newValue <= WEIGHT_MAX) {
            setWeight(newValue);
        }
    };

    // derived values
    const heightFt = Math.floor(heightTotalInches / 12);
    const heightIn = heightTotalInches % 12;

    return (
        <div className="h-screen w-screen bg-black text-white flex flex-col font-sans overflow-hidden">

            {/* Header */}
            <div className="px-6 pt-6 pb-2">
                <div className="flex items-center justify-between mb-8">
                    <button onClick={() => navigate('/signup/gender')} className="p-2 -ml-2">
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <span className="text-sm font-bold tracking-wide">Personal Info</span>
                    <div className="w-6" />
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-800 h-1 mb-8 rounded-full overflow-hidden">
                    <div className="w-[55%] h-full bg-white rounded-full" />
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col justify-evenly pb-24">

                {/* --- HEIGHT SECTION --- */}
                <div className="flex flex-col items-center justify-center relative">
                    <h2 className="text-2xl font-bold mb-2">What's your height?</h2>
                    <p className="text-gray-400 text-xs mb-8 text-center max-w-[200px]">
                        This is used to recommend Tonal arm positions
                    </p>

                    <div className="text-3xl font-bold mb-4">
                        {heightFt}' {heightIn}"
                    </div>
                    {/* Green Dot Indicator */}
                    <div className="w-2 h-2 bg-green-500 rounded-full mb-2 z-10" />

                    {/* Height Ruler Container */}
                    <div className="w-full relative h-16 group">
                        {/* Center Line (Visual only, the green dot above acts as pointer) */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-green-500 h-8 -translate-x-1/2 z-10 hidden" />

                        {/* Scrollable Area */}
                        <div
                            ref={heightScrollRef}
                            onScroll={handleHeightScroll}
                            className="w-full overflow-x-auto overflow-y-hidden no-scrollbar flex items-end snap-none py-4"
                            style={{ scrollSnapType: 'x mandatory' }} // Optional snapping
                        >
                            {/* Padding Left to center first item */}
                            <div style={{ minWidth: 'calc(50vw - 6px)' }} />

                            {/* Ticks */}
                            {Array.from({ length: HEIGHT_MAX - HEIGHT_MIN + 1 }).map((_, i) => {
                                const val = HEIGHT_MIN + i;
                                const isFoot = val % 12 === 0;
                                const isHalfFoot = val % 6 === 0;
                                return (
                                    <div
                                        key={val}
                                        className={`flex-shrink-0 flex flex-col items-center justify-end ${val === heightTotalInches ? 'opacity-100' : 'opacity-40'
                                            }`}
                                        style={{ width: RULER_UNIT_WIDTH }}
                                    >
                                        <div
                                            className={`bg-white w-[1px] ${isFoot ? 'h-8' : isHalfFoot ? 'h-5' : 'h-3'}`}
                                        />
                                    </div>
                                );
                            })}

                            {/* Padding Right to center last item */}
                            <div style={{ minWidth: 'calc(50vw - 6px)' }} />
                        </div>

                        {/* Gradient Fade Masks */}
                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* --- WEIGHT SECTION --- */}
                <div className="flex flex-col items-center justify-center relative mt-8">
                    <h2 className="text-2xl font-bold mb-2">What's your weight?</h2>

                    <div className="text-3xl font-bold mb-4 mt-8">
                        {weight} <span className="text-xl text-gray-500">lbs</span>
                    </div>
                    {/* Green Dot Indicator */}
                    <div className="w-2 h-2 bg-green-500 rounded-full mb-2 z-10" />

                    {/* Weight Dial Container */}
                    <div className="w-full relative h-56 overflow-hidden">

                        {/* Scrollable Area */}
                        <div
                            ref={weightScrollRef}
                            onScroll={handleWeightScroll}
                            className="w-full overflow-x-auto overflow-y-hidden no-scrollbar flex items-start pt-2 pb-56"
                        >
                            {/* Padding Left */}
                            <div style={{ minWidth: 'calc(50vw - 6px)' }} />

                            {/* Ticks with Curve Simulation */}
                            {Array.from({ length: WEIGHT_MAX - WEIGHT_MIN + 1 }).map((_, i) => {
                                const val = WEIGHT_MIN + i;
                                const diff = Math.abs(val - weight);
                                // Calculate a "curve" offset based on distance from current value
                                // Visual trick: translateY based on distance
                                const yOffset = Math.pow(diff, 2) * 0.25;
                                const isTen = val % 10 === 0;
                                const isFive = val % 5 === 0;

                                // Hide ticks that are too far down the "curve" to save rendering/visual noise
                                // if (yOffset > 100) {
                                //     return <div key={val} style={{ width: RULER_UNIT_WIDTH }} className="flex-shrink-0" />;
                                // }

                                return (
                                    <div
                                        key={val}
                                        className={`flex-shrink-0 flex flex-col items-center ${val === weight ? 'opacity-100' : 'opacity-40'
                                            }`}
                                        style={{
                                            width: RULER_UNIT_WIDTH,
                                            transform: `translateY(${yOffset}px) rotate(${(val - weight) * 0.5}deg)`, // Rotate slightly for dial effect
                                            transformOrigin: 'top center'
                                        }}
                                    >
                                        <div
                                            className={`bg-white w-[1px] ${isTen ? 'h-8' : isFive ? 'h-6' : 'h-3'}`}
                                        />
                                    </div>
                                );
                            })}

                            {/* Padding Right */}
                            <div style={{ minWidth: 'calc(50vw - 6px)' }} />
                        </div>

                        {/* Gradient Fade Masks */}
                        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />
                    </div>
                </div>

            </div>

            {/* Footer Button - Fixed at bottom */}
            <div className="fixed bottom-0 left-0 w-full p-6 bg-black z-50">
                <button
                    onClick={() => navigate('/signup/goal')}
                    className="w-full py-4 font-bold text-sm tracking-widest uppercase transition-colors bg-white text-black hover:bg-gray-200"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SignupBody;
