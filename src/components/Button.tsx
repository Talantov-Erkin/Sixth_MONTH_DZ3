import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils/cn'

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

export default function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return <button className={cn(
    'inline-flex cursor-pointer items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 disabled:opacity-50',
    variant === 'primary' ? 'bg-amber-700 text-white hover:bg-amber-800 shadow-lg shadow-amber-900/15' : 'border border-amber-800/25 bg-white/70 text-stone-800 hover:bg-amber-50',
    size === 'sm' && 'px-4 py-2 text-sm',
    size === 'md' && 'px-6 py-3 text-sm',
    size === 'lg' && 'px-8 py-4 text-base',
    className
  )} {...props}>{children}</button>
}
