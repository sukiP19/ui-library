import React from 'react';
import { updateClasses } from '../helper';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  bgColor?: string; // Background color
  textColor?: string; // Text color
  paddingX?: string; // Padding left/right
  paddingY?: string; // Padding top/bottom
  rounded?: string; // Border radius
  borderColor?: string; // Border color
  hoverBgColor?: string; // Hover background color
  hoverTextColor?: string; // Hover text color
  hoverBorderColor?: string; // Hover border color
  [key: string]: any; // Allow other props such as disabled, onClick, etc.
}

export const Button = ({
  children,
  variant = 'text',
  className,
  size,
  bgColor,
  textColor,
  paddingX,
  paddingY,
  rounded,
  borderColor,
  hoverBgColor,
  hoverTextColor,
  hoverBorderColor,
  ...props
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center font-medium';
  const variantStyles = {
    contained: `bg-${bgColor ?? 'blue-500'} text-${textColor ?? 'white'} hover:bg-${hoverBgColor ?? 'blue-700'}`,
    outlined: `border border-${borderColor ?? 'blue-500'} text-${textColor ?? 'blue-500'} hover:bg-${hoverBgColor ?? 'blue-100'}`,
    text: `text-${textColor ?? 'blue-500'} hover:text-${hoverTextColor ?? 'blue-700'}`,
  };
  const sizeStyles = {
    sm: 'text-xs', // Adjust size styles as needed
    md: 'text-base',
    lg: 'text-lg',
  };

  const paddingClasses = `px-${paddingX ?? '4'} py-${paddingY ?? '2'}`;
  const roundedClasses = `rounded-${rounded ?? 'md'}`;

  // Combine classes using spread operator and filter
  const finalClasses = updateClasses(
    `${baseClasses} ${variantStyles[variant]} ${size && sizeStyles[size]} ${paddingClasses} ${roundedClasses} ${className}`,
    `${className ?? ''}` // Pass className if present, or empty string
  );

  return (
    <button type="button" className={finalClasses} {...props}>
      {children}
    </button>
  );
};
