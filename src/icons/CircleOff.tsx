import { forwardRef, type SVGProps, type Ref } from "react";
const CircleOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2 2 20 20M8.35 2.69A10 10 0 0 1 21.3 15.65m-2.22 3.43A10.013 10.013 0 1 1 4.92 4.92" /></svg>);
CircleOff.displayName = "CircleOff";
export default CircleOff;