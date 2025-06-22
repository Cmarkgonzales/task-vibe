import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon  from '../components/generics/Icon'

const colorMap = {
    blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-500',
    },
    purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-500',
    },
    green: {
        bg: 'bg-green-100',
        text: 'text-green-500',
    },
    danger: {
        border: 'border-red-500',
        bg: 'bg-red-100',
        text: 'text-red-800',
    },
    warning: {
        border: 'border-yellow-500',
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
    },
};

const Landing = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <section className="landing-gradient text-white py-20 md:py-32">
                <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Manage tasks based on your mood
                        </h1>
                        <p className="text-lg md:text-xl opacity-90 mb-8">
                            TaskVibe helps you organize your work according to how you feel, boosting productivity and reducing stress.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <button className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg font-semibold shadow-lg transition-all">
                                Get Started
                            </button>
                            <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-all">
                                See Demo
                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md animate-fade-in-up">
                            <div className="card-bg rounded-xl shadow-xl overflow-hidden">
                                <div className="p-4 border-b border-border flex justify-between items-center">
                                    <div className="flex items-center">
                                        <Icon name="Clock" className="text-primary mr-2" size={16} />
                                        <h3 className="font-semibold">Today's Tasks</h3>
                                    </div>
                                </div>
                                <div className="p-3 space-y-3">
                                    {[{
                                        mood: 'Focused',
                                        title: 'Complete Project Proposal',
                                        desc: 'Finalize the document and send to the team',
                                        priority: 'High',
                                        color: 'danger'
                                    }, {
                                        mood: 'Creative',
                                        title: 'Design New Logo',
                                        desc: 'Create 3 variations for client review',
                                        priority: 'Medium',
                                        color: 'warning'
                                    }].map((task, i) => (
                                        <div key={i} className={`task-card card-bg rounded-lg shadow-sm p-4 border-l-4 ${colorMap[task.color].border}`}>
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="flex items-center gap-2">
                                                    <span className={`mood-indicator mood-${task.mood.toLowerCase()}`}></span>
                                                    <span className="text-xs font-medium">{task.mood}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-base font-semibold mb-1">{task.title}</h3>
                                            <p className="text-xs mb-3 text-light">{task.desc}</p>
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${colorMap[task.color].bg} ${colorMap[task.color].text}`}>
                                                {task.priority}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center rotate-12">
                                <span className="text-primary font-bold">New!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold mb-4">Why TaskVibe?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our unique approach to task management helps you work with your natural energy, not against it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[{
                            title: 'Mood-Based Organization',
                            desc: 'Organize tasks based on your current mood and energy levels for optimal productivity.',
                            color: 'blue',
                            icon: 'Clock'
                        }, {
                            title: 'Visual Task Management',
                            desc: 'Intuitive kanban board lets you see your workflow at a glance and easily move tasks between stages.',
                            color: 'purple',
                            icon: 'SquareCheckBig'
                        }, {
                            title: 'Productivity Insights',
                            desc: 'Track your progress and identify patterns in your productivity to optimize your workflow.',
                            color: 'green',
                            icon: 'ArrowUpDown'
                        }].map((feature, i) => (
                            <div key={i} className="feature-card card-bg rounded-xl p-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
                                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-full flex items-center justify-center mb-4`}>
                                    <Icon name={feature.icon} className={colorMap[feature.color].text} size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 landing-gradient text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to transform your productivity?</h2>
                    <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                        Join thousands of users who have discovered the power of mood-based task management.
                    </p>
                    <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold shadow-lg transition-all text-lg">
                        Get Started
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Landing;
