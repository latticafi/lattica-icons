import { forwardRef, type SVGProps, type Ref } from "react";
const ShowerHead = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m4 4 2.5 2.5m7 0a4.95 4.95 0 0 0-7 7M15 5 5 15m9 2v.01M10 16v.01M13 13v.01M16 10v.01M11 20v.01M17 14v.01M20 11v.01" /></svg>);
ShowerHead.displayName = "ShowerHead";
export default ShowerHead;