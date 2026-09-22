import { forwardRef, type SVGProps, type Ref } from "react";
const IterationCw = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 10a8 8 0 1 1 8 8H4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8 22-4-4 4-4" /></svg>);
IterationCw.displayName = "IterationCw";
export default IterationCw;