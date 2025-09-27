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
  default: 'bg-[#2563EB] text-white hover:bg-[#1E40AF]',
  outline: 'border border-[#2563EB] text-[#2563EB] bg-white hover:bg-[#EFF6FF]',
  ghost: 'text-[#2563EB] hover:bg-[#EFF6FF]',
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
