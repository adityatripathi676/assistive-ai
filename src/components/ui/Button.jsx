import React from 'react';
import clsx from 'clsx';

const variants = {
  primary: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-blue-500/25',
  destructive: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-red-500/25'
};

function Button({ children, variant = 'primary', disabled, onClick, className }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-white',
        'bg-gradient-to-r',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'transform hover:scale-105 transition-all duration-300',
        'shadow-lg text-sm sm:text-base',
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;