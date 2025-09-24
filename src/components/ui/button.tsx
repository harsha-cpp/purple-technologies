import { component$, Slot } from '@builder.io/qwik';

export type ButtonProps = {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  class?: string;
  onClick$?: any;
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  default: 'bg-gray-900 text-white hover:bg-black',
  outline:
    'border border-gray-300 text-gray-900 bg-white hover:bg-gray-50',
  ghost: 'text-gray-900 hover:bg-gray-100',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-3 text-sm rounded-md',
  md: 'h-10 px-4 text-sm rounded-md',
  lg: 'h-11 px-6 text-base rounded-lg',
};

export default component$<ButtonProps>((props) => {
  const {
    variant = 'default',
    size = 'md',
    type = 'button',
    disabled,
    class: className = '',
    onClick$,
  } = props;
  const cls = `inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  return (
    <button type={type} disabled={disabled} class={cls} onClick$={onClick$}>
      <Slot />
    </button>
  );
});
