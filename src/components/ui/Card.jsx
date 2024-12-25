import React from 'react';
import clsx from 'clsx';

function Card({ children, className }) {
  return (
    <div className={clsx(
      'bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg',
      'shadow-xl transition-all duration-300',
      className
    )}>
      {children}
    </div>
  );
}

export default Card;