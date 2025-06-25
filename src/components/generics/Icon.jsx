import * as Icons from 'lucide-react';

const Icon = ({ name, className = '', size = 24 }) => {
    const LucideIcon = Icons[name];

    if (!LucideIcon) return null;

    return (
        <LucideIcon
            className={`w-[${size}px] h-[${size}px] ${className}`}
            aria-hidden="true"
        />
    );
};

export default Icon;
