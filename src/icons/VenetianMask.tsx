import { forwardRef, type SVGProps, type Ref } from "react";
const VenetianMask = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 11c-1.5 0-2.5.5-3 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 11c1.5 0 2.5.5 3 2" /></svg>);
VenetianMask.displayName = "VenetianMask";
export default VenetianMask;