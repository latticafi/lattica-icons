import { forwardRef, type SVGProps, type Ref } from "react";
const FaceAngry = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 12v-1.584M17 10a5 5 0 0 0-3 1m-7-1a5 5 0 0 1 3 1m-1 1v-1.584M9 17a5 5 0 0 1 6.001 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" /></svg>);
FaceAngry.displayName = "FaceAngry";
export default FaceAngry;