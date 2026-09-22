import { forwardRef, type SVGProps, type Ref } from "react";
const Drum = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2 2 8 8m12-8-8 8m-2 4c5.523 0 10-2.239 10-5s-4.477-5-10-5S2 6.239 2 9s4.477 5 10 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 13.4v7.9m5-7.3v8m0 0c-2.652 0-5.196-.527-7.071-1.465C3.054 19.598 2 18.327 2 17V9m10 13c2.652 0 5.196-.527 7.071-1.465C20.946 19.598 22 18.327 22 17V9m-5 4.4v7.9" /></svg>);
Drum.displayName = "Drum";
export default Drum;