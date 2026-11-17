import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  asChild?: boolean;
}

const variantStyles = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline:
    'inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-transparent px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-cyan/50 hover:bg-cyan/5',
  ghost:
    'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-ink/80 transition hover:bg-white/5 hover:text-ink',
};

const sizeStyles = {
  small: 'px-3 py-1.5 text-xs',
  medium: '',
  large: 'px-6 py-3 text-base',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
