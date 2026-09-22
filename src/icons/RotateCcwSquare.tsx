import { forwardRef, type SVGProps, type Ref } from "react";
const RotateCcwSquare = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 9V7a2 2 0 0 0-2-2h-6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15 2-3 3 3 3m5 5v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" /></svg>);
RotateCcwSquare.displayName = "RotateCcwSquare";
export default RotateCcwSquare;