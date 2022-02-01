import React from 'react';
import { InputProps } from './Input.types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      label,
      error,
      className,
      inputClassName,
      disabled,
      maxLength,
      type,
      step,
      tooltip,
      children,
      onChange,
      showControls = false,
      ...props
    },
    ref,
  ) => {
    return <div>sd</div>;
  },
);
