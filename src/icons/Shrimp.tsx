import { forwardRef, type SVGProps, type Ref } from "react";
const Shrimp = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 2a3.28 3.28 0 0 0 3.227 1.798l6.17-.561A2.384 2.384 0 0 1 19.614 8H8.5a6.44 6.44 0 0 0-5.63 9.75A6.5 6.5 0 0 0 8.5 21c1.38 0 2-.5 2.5-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 8a8.5 8.5 0 0 0 0 8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 22c-.5-.5-1.12-1-2.5-1a2.5 2.5 0 0 1 0-5H12a7 7 0 0 0 7-7V8m-6 4h.01" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 16c-2 0-4.5-4-4-6" /></svg>);
Shrimp.displayName = "Shrimp";
export default Shrimp;