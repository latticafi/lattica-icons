import { forwardRef, type SVGProps, type Ref } from "react";
const LoaderPinwheel = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 12a5 5 0 1 1-10 0 5 5 0 0 0-10 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 20.7a5.017 5.017 0 1 1 5-8.7 4.974 4.974 0 1 0 5-8.6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 3.3a4.974 4.974 0 0 1 5 8.6 4.974 4.974 0 0 0 5 8.6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>);
LoaderPinwheel.displayName = "LoaderPinwheel";
export default LoaderPinwheel;