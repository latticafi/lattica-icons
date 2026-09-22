import { forwardRef, type SVGProps, type Ref } from "react";
const Turntable = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 12.01h.01M18 8v4a8 8 0 0 1-1.07 4M10 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" /></svg>);
Turntable.displayName = "Turntable";
export default Turntable;