import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import clsx from 'clsx';

const TaskCard = ({ task }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const getPriorityClass = (priority) => {
    return clsx(
      'px-2 py-0.5 rounded-full text-xs font-medium',
      {
        high: 'bg-red-100 text-red-600',
        medium: 'bg-yellow-100 text-yellow-600',
        low: 'bg-green-100 text-green-600',
      }[priority]
    );
  };

    const getBorderClass = (priority) => {
        return clsx(
            'p-4 rounded-lg bg-white shadow-sm relative task-card card-bg  border-l-4',
            {
                high: 'border-danger',
                medium: 'border-warning',
                low: 'border-success',
            }[priority]
        );
    };

  const getDueDateText = (dueDate) => {
    const now = new Date();
    const date = new Date(dueDate);
    const diff = Math.floor((date - now) / (1000 * 60 * 60 * 24));

    if (diff < 0) return { text: 'Overdue', className: 'text-red-500' };
    if (diff === 0) return { text: 'Today', className: 'text-yellow-500' };
    return { text: `In ${diff} day${diff > 1 ? 's' : ''}`, className: 'text-gray-500' };
  };

  const { text: dueDateText, className: dueDateClass } = task.dueDate
    ? getDueDateText(task.dueDate)
    : { text: '', className: '' };

  return (
    <div className={getBorderClass(task.priority)}>
      {/* Top Section: Mood + Menu */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className={`mood-indicator mood-${task.mood} w-2.5 h-2.5 rounded-full mr-2`} />
          <span className="text-xs font-medium capitalize text-text-light">{task.mood}</span>
        </div>
        <div className="flex items-center space-x-2 relative">
          {dueDateText && <span className={`text-xs ${dueDateClass}`}>{dueDateText}</span>}
          <button
            onClick={toggleMenu}
            className="p-1 rounded-full hover:bg-gray-200 focus:outline-none"
            aria-label="Task menu"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-8 w-36 rounded-md shadow-lg bg-white z-10 border border-gray-200">
              <div className="py-1">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Edit</button>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Delete</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Title and Description */}
      <h3
        className={clsx(
          'text-base font-semibold mb-1',
          task.status === 'done' && 'line-through text-gray-400'
        )}
      >
        {task.title}
      </h3>
      {task.description && (
        <p className="text-xs mb-3 text-text-light">{task.description}</p>
      )}

      {/* Priority */}
      <div className="flex justify-between items-center">
        <span className={getPriorityClass(task.priority)}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
