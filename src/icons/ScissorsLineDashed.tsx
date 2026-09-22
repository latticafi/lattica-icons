import { forwardRef, type SVGProps, type Ref } from "react";
const ScissorsLineDashed = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.42 9.42 8 12m-4-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m10-4-8.58 8.58M4 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m6.8-3.2L14 18m2-6h-2m8 0h-2" /></svg>);
ScissorsLineDashed.displayName = "ScissorsLineDashed";
export default ScissorsLineDashed;