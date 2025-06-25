import Icon from '../components/generics/Icon';

const TaskColumn = ({ title, icon, count, children, onAddTask }) => {
    const isTodo = title.toLowerCase() === 'to do';

    return (
        <div className="card-bg rounded-xl shadow-sm h-full overflow-hidden flex flex-col">
            <div className="p-4 border-b border-border flex justify-between items-center min-h-[56px]">
                <div className="flex items-center">
                    {icon}
                    <h3 className="font-semibold ml-2">{title}</h3>
                </div>

                <div className="flex items-center space-x-2">
                    {count > 1 && (
                        <span className="text-small font-medium text-text">
                            {count}
                        </span>
                    )}

                    {/* Reserve space even if the Add Task button is not shown */}
                    {isTodo ? (
                        <button
                            onClick={onAddTask}
                            className="btn-primary relative group p-1.5 rounded-full transition"
                            aria-label="Add Task"
                            aria-describedby="add-task-tooltip"
                        >
                            <Icon name="Plus" className="w-5 h-5 text-white" />
                            <span
                                id="add-task-tooltip"
                                role="tooltip"
                                className="absolute top-full mt-2 left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 text-xs bg-gray-700 text-white px-2 py-1 rounded-md shadow-lg pointer-events-none z-10 whitespace-nowrap"
                            >
                                Add task
                            </span>
                        </button>
                    ) : (
                        <div className="w-8 h-8" aria-hidden="true" />
                    )}
                </div>
            </div>

            <div className="p-3 space-y-2 flex-1">
                {children?.length ? (
                    children
                ) : (
                    <p className="text-sm text-gray-400">No tasks</p>
                )}
            </div>
        </div>
    );
};

export default TaskColumn;
