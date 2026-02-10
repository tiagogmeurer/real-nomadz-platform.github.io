import React from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type BaseProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonOnlyProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AnchorOnlyProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonOnlyProps | AnchorOnlyProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<Variant, string> = {
    primary:
      "bg-brand-orange hover:bg-orange-600 text-white shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] border border-transparent",
    secondary: "bg-white text-black hover:bg-gray-100 border border-transparent",
    outline:
      "border border-white/20 text-white hover:border-brand-orange hover:text-brand-orange bg-transparent backdrop-blur-sm",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5",
  };

  const sizes: Record<Size, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  };

  const classes = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className
  );

  if ('href' in props && props.href) {
    const { href, target, rel, ...rest } = props;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
