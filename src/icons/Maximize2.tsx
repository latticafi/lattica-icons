import { forwardRef, type SVGProps, type Ref } from "react";
const Maximize2 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 9V3h-6m6 0-7 7M3 21l7-7m-7 1v6h6" /></svg>);
Maximize2.displayName = "Maximize2";
export default Maximize2;