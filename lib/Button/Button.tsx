import type { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}

export const Button = ({ children } : ButtonProps) => {
    return <button className='bg-red-800'>{children}</button>
}