import { ArrowLeft, Settings, Info, Shield, CreditCard, ShoppingBag, Trophy, Dumbbell, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotificationsScreen = () => {
    const navigate = useNavigate();

    const sections = [
        {
            title: "Today",
            items: [
                {
                    id: 1,
                    icon: Info,
                    title: "New AI Features!",
                    desc: "Improved Squat tracking is now live. Update Gymi for better feedback.",
                    time: "09:41 AM",
                    unread: true
                },
                {
                    id: 2,
                    icon: Shield,
                    title: "Workout Reminder",
                    desc: "Your 'Leg Day' session starts in 20 mins. Get ready to sweat!",
                    time: "09:10 AM",
                    unread: true
                }
            ]
        },
        {
            title: "Yesterday",
            items: [
                {
                    id: 3,
                    icon: CreditCard,
                    title: "Coach Feedback",
                    desc: "Coach Talha commented on your Deadlift form: 'Keep your back straight!'",
                    time: "09:47 AM",
                    unread: false
                },
                {
                    id: 4,
                    icon: ShoppingBag,
                    title: "Ramadan Fitness Challenge!",
                    desc: "Join the 30-day streak this Ramadan to stay fit.",
                    time: "16:50 PM",
                    unread: false
                }
            ]
        },
        {
            title: "Dec 18, 2023",
            items: [
                {
                    id: 5,
                    icon: Trophy,
                    title: "Badge Unlocked!",
                    desc: "You hit a 7-day workout streak. Keep it up, champion!",
                    time: "13:41 PM",
                    unread: false
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white animate-fade-in flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-900 sticky top-0 bg-black z-10">
                <button
                    onClick={() => navigate(-1)}
                    className="p-1 -ml-1"
                >
                    <ArrowLeft size={24} />
                </button>
                <h1 className="text-xl font-bold">Notification</h1>
                <button className="p-1 -mr-1">
                    <Settings size={24} />
                </button>
            </div>

            {/* List Content */}
            <div className="flex-1 overflow-y-auto px-6 py-2">
                {sections.map((section, idx) => (
                    <div key={idx} className="mb-8">
                        <h2 className="text-gray-500 text-sm font-medium mb-6 mt-4">{section.title}</h2>
                        <div className="space-y-8">
                            {section.items.map(item => (
                                <div key={item.id} className="flex items-start gap-4">
                                    {/* Icon Circle */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center bg-gray-900/50">
                                        <item.icon size={20} className="text-white" strokeWidth={1.5} />
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1 min-w-0 pt-1">
                                        <h3 className="text-base font-bold mb-1 truncate text-white">{item.title}</h3>
                                        <p className="text-gray-400 text-xs leading-relaxed mb-2 line-clamp-2">
                                            {item.desc}
                                        </p>
                                        <span className="text-gray-500 text-[10px] font-medium">{item.time}</span>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-3 self-center">
                                        {item.unread && (
                                            <div className="w-2.5 h-2.5 bg-[#FFC107] rounded-full"></div>
                                        )}
                                        <ChevronRight size={20} className="text-gray-500" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsScreen;
