import { updateClasses } from '../helper';

interface CheckboxProps {
  checked?: boolean;
  className?: string;
  label?: string;
  onChange?: (checked: boolean) => void;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outlined' | 'filled';
  checkStyle?: 'checkmark' | 'line';
  strokeColor?: string;
  // Add other props as needed
}

export const Checkbox = ({
  checked = false,
  className = '',
  label,
  onChange,
  color = 'text-blue-500',
  size = 'md',
  variant = 'outlined',
  checkStyle = 'checkmark',
  strokeColor,
  ...props
}: CheckboxProps) => {
  const baseClasses = 'flex items-center cursor-pointer';
  const containerClasses = updateClasses(baseClasses, className);
  const sizeClass = size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5';
  const checkSvg = checkStyle === 'checkmark' ? (
    <svg
      className={`w-full h-full ${color}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ) : (
    <svg
      className={`w-full h-full ${color}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="12" x2="20" y2="12" />
    </svg>
  );

  return (
    <label className={containerClasses}>
      <input
        type="checkbox"
        checked={checked}
        className="hidden"
        {...props}
      />
      <span
        className={updateClasses(
          `relative inline-flex items-center justify-center border rounded transition duration-150 ease-in-out ${variant === 'filled' ? 'bg-gray-200' : 'border-gray-300'} ${sizeClass}`,
          className
        )}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-transform transform ${checked ? 'scale-100' : 'scale-0'}`}
        >
          {checkSvg}
        </span>
      </span>
      {label && <span className="ml-2 select-none">{label}</span>}
    </label>
  );
};

