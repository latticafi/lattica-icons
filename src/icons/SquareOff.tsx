import { forwardRef, type SVGProps, type Ref } from "react";
const SquareOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20.4 20.4a2 2 0 0 1-1.4.6H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41M21 15.3V5a2 2 0 0 0-2-2H8.7M22 22 2 2" /></svg>);
SquareOff.displayName = "SquareOff";
export default SquareOff;