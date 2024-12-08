import { cva } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-accent text-primary hover:bg-accent-hover',
        primary: 'bg-primary text-white',
        outline: 'border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary'
      },
      size: {
        default: 'h-[44px] px-6',
        md: 'h-[48px] px-6',
        lg: 'h-[56px] px-6 text-sm uppercase tracking-[2px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
