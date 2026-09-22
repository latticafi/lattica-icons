import { forwardRef, type SVGProps, type Ref } from "react";
const Construction = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 6H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-4 8v7M7 14v7M17 3v3M7 3v3m3 8L2.3 6.3M14 6l7.7 7.7M8 6l8 8" /></svg>);
Construction.displayName = "Construction";
export default Construction;