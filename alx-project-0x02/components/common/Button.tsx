// components/common/Button.tsx
import React from 'react'
import { ButtonProps } from '@/interfaces'

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-5 py-3 text-lg',
}

const shapeClasses = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  shape = 'rounded-md',
  onClick,
}) => {
  const baseClass =
    'bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors'

  return (
    <button
      className={`${baseClass} ${sizeClasses[size]} ${shapeClasses[shape]}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
