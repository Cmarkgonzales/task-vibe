import { useEffect } from 'react';
import clsx from 'clsx';

const TaskCardPanel = ({ isOpen, onClose, onSubmit, taskData = {} }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    const task = {
        id: null,
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium',
        status: 'todo',
        mood: 'calm',
        ...taskData,
    };

    return (
        <div
            className={clsx(
                'fixed inset-0 z-50 flex justify-end',
                isOpen ? '' : 'pointer-events-none'
            )}
        >
            <div
                onClick={onClose}
                className={clsx(
                    'absolute inset-0 bg-black transition-opacity duration-300 ease-in-out',
                    isOpen ? 'opacity-30' : 'opacity-0'
                )}
            />

            <div
                className={clsx(
                    'relative w-full max-w-md h-full bg-white dark:bg-card-bg shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto',
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">
                            {task?.id ? 'Edit Task' : 'Add New Task'}
                        </h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            onSubmit();
                        }}
                    >
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Task Title</label>
                            <input
                                type="text"
                                defaultValue={task.title || ''}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Description</label>
                            <textarea
                                rows="3"
                                defaultValue={task.description || ''}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block mb-2 text-sm font-medium">Due Date</label>
                                <input
                                    type="date"
                                    defaultValue={task.dueDate || ''}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium">Priority</label>
                                <select
                                    defaultValue={task.priority || 'medium'}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Status</label>
                            <select
                                defaultValue={task.status || 'todo'}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="todo">To Do</option>
                                <option value="doing">Doing</option>
                                <option value="done">Done</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Task Mood</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {['calm', 'energetic', 'focused', 'creative'].map((mood) => (
                                    <label
                                        key={mood}
                                        className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                                    >
                                        <input
                                            type="radio"
                                            name="taskMood"
                                            value={mood}
                                            defaultChecked={task.mood === mood}
                                            className="mr-2"
                                        />
                                        <span className={`mood-indicator mood-${mood} mr-1`}></span>
                                        <span className="text-sm capitalize">{mood}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="btn-secondary px-4 py-2 rounded-lg text-sm"
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn-primary px-4 py-2 rounded-lg text-sm">
                                Save Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TaskCardPanel;
