import React from 'react';
import { updateClasses } from '../helper';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  className?: string;
  size?: 'sm' | 'md' | 'lg'; 
  // Add other props as needed (e.g., disabled, onClick)
}

export const Button = ({ children, variant = 'text', className, size, ...props }: ButtonProps) => {
  const baseClasses = 'inline-flex items-center px-4 py-2 rounded-md font-medium';
  const variantStyles = {
    contained: 'bg-blue-500 text-white hover:bg-blue-700',
    outlined: 'border border-blue-500 text-blue-500 hover:bg-blue-100',
    text: 'text-blue-500 hover:text-blue-700',
  };
  const sizeStyles = {
    sm: 'text-xs', // Adjust size styles as needed
    md: 'text-base',
    lg: 'text-lg',
  };

  // Combine classes using updateClasses function
  const finalClasses = updateClasses(
    `${baseClasses} ${variantStyles[variant]} ${size && sizeStyles[size]} ${className}`,
    `${className ?? ''}`
  );

  return (
    <button type="button" className={finalClasses} {...props}>
      {children}
    </button>
  );
};
