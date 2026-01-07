import { ArrowLeft, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    // Mock heatmap data
    const heatmapDots = Array(28).fill(0).map((_, i) => ({
        id: i,
        active: false // All inactive for "0 ACTIVE DAYS"
    }));

    return (
        <div className="min-h-screen bg-black text-white animate-fade-in pb-12">
            {/* Header / Background Pattern */}
            <div className="relative h-48 w-full overflow-hidden">
                {/* Chevron Pattern Background */}
                <div className="absolute inset-0 bg-[#1c1c1e] opacity-50"
                    style={{
                        backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`,
                        backgroundSize: '20px 20px',
                        backgroundPosition: '0 0, 10px 10px'
                    }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

                {/* Nav Icons */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-4 p-2 z-10"
                >
                    <ArrowLeft size={28} strokeWidth={2} />
                </button>
                <button className="absolute top-6 right-4 p-2 bg-[#2C2C2E] rounded-full z-10">
                    <Pencil size={20} />
                </button>
            </div>

            {/* Profile Info - Pull up to overlap header */}
            <div className="flex flex-col items-center -mt-24 relative px-4 text-center">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full bg-[#2ECC71] flex items-center justify-center text-black font-medium text-6xl mb-4 border-4 border-black">
                    L
                </div>

                <h1 className="text-3xl font-bold mb-1">Laheem42</h1>
                <p className="text-gray-400 text-sm">Laheem Ayub</p>
                <p className="text-gray-500 text-sm mt-1">M • 20s • L</p>

                {/* Social Stats */}
                <div className="flex items-center justify-between w-full max-w-sm mt-8 px-4">
                    <div className="flex gap-8 text-left">
                        <div>
                            <div className="text-2xl font-bold">0</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Following</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">0</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Followers</div>
                        </div>
                    </div>
                    <button className="border border-white/30 px-6 py-2 text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-white hover:text-black transition-colors">
                        Find Friends
                    </button>
                </div>
            </div>

            {/* Week Streak / Heatmap */}
            <div className="mt-12 px-6 border-t border-gray-900 pt-8">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="w-8 h-1 bg-white mb-2"></div>
                        <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest">Week Streak</h3>
                    </div>

                    <div className="text-right">
                        <div className="text-[10px] text-gray-500 font-bold uppercase mb-2">0 Active Days on Gymi</div>
                        {/* Heatmap Grid */}
                        <div className="grid grid-cols-7 gap-2">
                            {heatmapDots.map(dot => (
                                <div key={dot.id} className="w-2 h-2 rounded-full bg-gray-800"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Strength Score */}
            <div className="mt-12 px-6 border-t border-gray-900 pt-8">
                <div>
                    <div className="w-4 h-1 bg-white mb-2"></div>
                    <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest leading-relaxed">
                        Strength<br />Score
                    </h3>

                    <p className="text-gray-500 text-sm mt-4">
                        See your strength grow as you train over time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
