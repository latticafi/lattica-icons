import { forwardRef, type SVGProps, type Ref } from "react";
const Bubbles = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5m9.5-4.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 22a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0-15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /></svg>);
Bubbles.displayName = "Bubbles";
export default Bubbles;