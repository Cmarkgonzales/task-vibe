import { useState, useEffect } from 'react';
import Icon from '../components/generics/Icon';
import TaskCard from '../components/TaskCard';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('all');
    const [moodFilter, setMoodFilter] = useState('all');

    useEffect(() => {
        // Replace with real API fetch
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const nextWeek = new Date(today);
        nextWeek.setDate(nextWeek.getDate() + 7);
        const sampleTasks = [
                    {
                        id: '1',
                        title: 'Complete TaskVibe Project',
                        description: 'Finish the task management application with all required features.',
                        dueDate: formatDate(tomorrow),
                        priority: 'high',
                        mood: 'focused',
                        status: 'doing',
                        createdAt: new Date().toISOString(),
                        color: 'danger'
                    },
                    {
                        id: '2',
                        title: 'Morning Meditation',
                        description: '15 minutes of mindfulness meditation to start the day.',
                        dueDate: formatDate(today),
                        priority: 'medium',
                        mood: 'calm',
                        status: 'done',
                        createdAt: new Date().toISOString(),
                        color: 'warning'
                    },
                    {
                        id: '3',
                        title: 'Brainstorm New Project Ideas',
                        description: 'Generate innovative concepts for the upcoming quarter.',
                        dueDate: formatDate(nextWeek),
                        priority: 'low',
                        mood: 'creative',
                        status: 'todo',
                        createdAt: new Date().toISOString(),
                        color: 'success'
                    },
                    {
                        id: '4',
                        title: 'Workout Session',
                        description: '45 minutes of high-intensity interval training.',
                        dueDate: formatDate(tomorrow),
                        priority: 'medium',
                        mood: 'energetic',
                        status: 'todo',
                        createdAt: new Date().toISOString(),
                        color: 'warning'
                    }
                ];
        setTasks(sampleTasks);
    }, []);

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
        const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
        const matchesMood = moodFilter === 'all' || task.mood === moodFilter;
        return matchesSearch && matchesPriority && matchesMood;
    });

    const getTasksByStatus = (status) => filteredTasks.filter(task => task.status === status);

    const progress = Math.round((getTasksByStatus('done').length / tasks.length) * 100) || 0;

    const TaskColumn = ({ title, icon, count, children }) => (
        <div className="card-bg rounded-xl shadow-sm h-full overflow-hidden">
            <div className="p-4 flex border-b border-border justify-between items-center">
                <div className="flex items-center">
                    {icon}
                    <h3 className="font-semibold ml-2">{title}</h3>
                </div>
                <span className="text-xs font-medium px-2 py-0 rounded-full bg-secondary text-text">
                    {count}
                </span>
            </div>
            <div className="p-3 space-y-2">
                {children.length ? children : <p className="text-sm text-gray-400">No tasks</p>}
            </div>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-6">
            <header className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                <Icon name="ClipboardList" className="w-6 h-6 text-primary" /> TaskVibe
                </h1>
                <div className="flex gap-2 mt-4 md:mt-0">
                <button className="btn-secondary px-3 py-2 rounded-lg flex items-center shadow-sm">
                    <Icon name="Palette" className="w-5 h-5 text-primary mr-2" />
                    Theme
                </button>
                <button className="btn-primary flex items-center gap-1 px-4 py-2 rounded-lg shadow-sm">
                    <Icon name="Plus" className="w-5 h-5" /> Add Task
                </button>
                </div>
            </header>
            <div className="card-bg rounded-xl p-4 shadow-sm mb-6">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center mb-2 md:mb-0">
                        <Icon name="SquareCheckBig" className="w-5 h-5 mr-2 text-primary" />
                        <h2 className="text-lg font-semibold">Task Overview</h2>
                    </div>
                    <div className="flex gap-3 text-sm">
                    <div className="dashboard-pill bg-secondary flex items-center px-3 py-1 rounded-full bg-opacity-20 gap-2">
                        <span className="text-xs font-medium mr-1">Progress:</span>
                        <div className="w-24 h-1.5 rounded-full progress-bar bg-gray-200 overflow-hidden">
                            <div className="h-full progress-value" style={{ width: `${progress}%` }}></div>
                        </div>
                        <span className="text-sm progress font-semibold">{progress}%</span>
                    </div>
                    <div className="dashboard-pill flex bg-secondary items-center px-3 py-1 rounded-full bg-opacity-20">
                        <span className="text-xs font-medium mr-1">Total:</span>
                        <span id="totalTasks" className="text-sm font-bold">{ tasks.length }</span>
                    </div>
                    
                    <div className="dashboard-pill bg-success text-text flex items-center px-3 py-1 rounded-full bg-opacity-20">
                        <span className="text-xs font-medium mr-1">Done:</span>
                        <span id="completedTasks" className="text-sm font-bold">{ getTasksByStatus('done').length }</span>
                    </div>
                    <div className="dashboard-pill bg-warning flex items-center px-3 py-1 rounded-full bg-opacity-20">
                        <span className="text-xs font-medium mr-1">Pending:</span>
                        <span id="pendingTasks" className="text-sm font-bold">{ getTasksByStatus('todo').length }</span>
                    </div>
                    <button id="dashboardDetailsBtn" className="dashboard-pill bg-primary-light flex items-center px-3 py-1 rounded-full bg-opacity-20 hover:bg-opacity-30">
                            <Icon name="MoreHorizontal" className="w-4 h-4 mr-1" />
                            <span className="text-xs font-medium">Details</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="card-bg p-4 rounded-xl mb-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-1/2">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-accent focus:ring-2 focus:ring-primary"
                />
                <Icon name="Search" className="absolute left-3 top-2 w-4 h-4 text-gray-500" />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-accent"
                >
                    <option value="all">All Priorities</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <select
                    value={moodFilter}
                    onChange={(e) => setMoodFilter(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-accent"
                >
                    <option value="all">All Moods</option>
                    <option value="calm">Calm</option>
                    <option value="energetic">Energetic</option>
                    <option value="focused">Focused</option>
                    <option value="creative">Creative</option>
                </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 h-[calc(100vh-100px)]">
                <TaskColumn title="To Do" status="todo" icon={<Icon name="ClipboardList" className="w-5 h-5 text-primary" />} count={getTasksByStatus('todo').length}>
                {getTasksByStatus('todo').map(task => <TaskCard key={task.id} task={task} />)}
                </TaskColumn>

                <TaskColumn title="Doing" status="doing" icon={<Icon name="Clock" className="w-5 h-5 text-warning" />} count={getTasksByStatus('doing').length}>
                {getTasksByStatus('doing').map(task => <TaskCard key={task.id} task={task} />)}
                </TaskColumn>

                <TaskColumn title="Done" status="done" icon={<Icon name="CheckCircle" className="w-5 h-5 text-success" />} count={getTasksByStatus('done').length}>
                {getTasksByStatus('done').map(task => <TaskCard key={task.id} task={task} />)}
                </TaskColumn>
            </div>

            {!tasks.length && (
                <div className="text-center py-12">
                <Icon name="ClipboardList" className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No tasks yet</h3>
                <p className="text-gray-500 mb-4">Start by adding your first task</p>
                <button className="btn-primary px-6 py-2 rounded-lg">Add Your First Task</button>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
