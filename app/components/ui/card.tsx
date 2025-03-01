import { ReactNode } from 'react';

export default function Card({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={`shadow-md rounded-xl bg-white p-4 ${className}`}>
      {children}
    </div>
  );
}
