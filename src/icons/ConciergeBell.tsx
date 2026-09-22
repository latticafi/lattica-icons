import { forwardRef, type SVGProps, type Ref } from "react";
const ConciergeBell = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 16H4a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2M4 16a8 8 0 0 1 8-8m8 8a8 8 0 0 0-8-8m0 0V4m-2 0h4" /></svg>);
ConciergeBell.displayName = "ConciergeBell";
export default ConciergeBell;