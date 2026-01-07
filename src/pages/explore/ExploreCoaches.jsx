const ExploreCoaches = () => {
    return (
        <div className="flex flex-col gap-6 pb-20 animate-fade-in">
            {/* New Coaches - Featured */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4">NEW COACHES</h2>
                <div className="w-full bg-[#1c1c1e] rounded-lg overflow-hidden flex relative h-48">
                    <div className="absolute inset-0 z-0">
                        <img src="/images/coach_featured_pakistani.png" className="w-full h-full object-cover object-top opacity-80" alt="Ahmed Khan" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
                    </div>
                    <div className="z-10 p-6 flex flex-col justify-center">
                        <span className="bg-white/20 backdrop-blur-md px-2 py-1 text-[10px] font-bold rounded uppercase mb-2 inline-block w-fit">NEW</span>
                        <h3 className="font-bold text-xl mb-1">Ahmed Khan</h3>
                        <p className="text-gray-400 text-sm">Disciplined and Focused</p>
                    </div>
                </div>
            </div>

            {/* Coaches With Recent Releases - List */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4">COACHES WITH RECENT RELEASES</h2>
                <div className="flex flex-col gap-3">
                    {[
                        { name: "Coach Bilawal", tagline: "Energy and Power", img: "/images/coach_pakistani_3.png" },
                        { name: "Omar Farooq", tagline: "Strength and Stability", img: "/images/coach_pakistani_2.png" },
                        { name: "Zain Malik", tagline: "Endurance Expert from Lahore", img: "/images/coach_pakistani_4.png" },
                    ].map((coach, bgIndex) => (
                        <div key={bgIndex} className="bg-[#1c1c1e] rounded-lg overflow-hidden flex h-24 items-center">
                            <div className="w-24 h-full relative">
                                <img src={coach.img} className="w-full h-full object-cover object-top" alt={coach.name} />
                            </div>
                            <div className="flex-1 px-4 flex flex-col justify-center">
                                <h3 className="font-bold text-lg">{coach.name}</h3>
                                <p className="text-gray-400 text-sm leading-tight">{coach.tagline}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* More Coaches - Circular Grid */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-4">MORE COACHES</h2>
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                    {[
                        { name: "Hamza Ali", img: "/images/coach_pakistani_4.png" },
                        { name: "Saad Khan", img: "/images/coach_pakistani_2.png" },
                        { name: "Usman Qureshi", img: "/images/coach_pakistani_3.png" },
                        { name: "Coach Sana", img: "/images/coach_featured_pakistani.png" },
                    ].map((coach, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-28 h-28 rounded-full border-2 border-gray-800 p-1 mb-3">
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <img src={coach.img} className="w-full h-full object-cover object-top" alt={coach.name} />
                                </div>
                            </div>
                            <h3 className="font-bold text-sm">{coach.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExploreCoaches;
