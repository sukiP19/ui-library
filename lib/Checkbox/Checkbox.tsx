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
  disabled?: boolean; // Added disabled prop
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
  disabled = false, // Default disabled to false
  ...props
}: CheckboxProps) => {
  const baseClasses = 'flex items-center cursor-pointer';
  const containerClasses = updateClasses(baseClasses, className);
  const sizeClass = size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5';
  const finalStrokeColor = strokeColor ? strokeColor : variant === 'filled' ? 'text-white' : 'text-gray-900';
  const checkSvg = checkStyle === 'checkmark' ? (
    <svg
      className={`w-full h-full ${finalStrokeColor}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ) : (
    <svg
      className={`w-full h-full ${finalStrokeColor}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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
        disabled={disabled}
        className={`hidden ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{ pointerEvents: disabled ? 'none' : 'auto' }}
        {...props}
      />
      <span
        className={updateClasses(
          `relative inline-flex items-center justify-center rounded transition duration-150 ease-in-out ${variant === 'filled' ? 'bg-blue-500' : 'border border-gray-900'} ${sizeClass} ${disabled ? 'opacity-50' : ''}`,
          className
        )}
        style={{ pointerEvents: disabled ? 'none' : 'auto' }}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-transform transform ${checked ? 'scale-100' : 'scale-0'}`}
        >
          {checkSvg}
        </span>
      </span>
      {label && (
        <span className={`ml-2 select-none ${disabled ? 'opacity-50' : ''}`}>
          {label}
        </span>
      )}
    </label>
  );
};
