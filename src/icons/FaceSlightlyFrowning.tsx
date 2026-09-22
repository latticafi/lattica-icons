import { forwardRef, type SVGProps, type Ref } from "react";
const FaceSlightlyFrowning = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 10V9m-6 1V9m0 7a5 5 0 0 1 6 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>);
FaceSlightlyFrowning.displayName = "FaceSlightlyFrowning";
export default FaceSlightlyFrowning;