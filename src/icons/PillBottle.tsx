import { forwardRef, type SVGProps, type Ref } from "react";
const PillBottle = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7m1-5H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1" /></svg>);
PillBottle.displayName = "PillBottle";
export default PillBottle;