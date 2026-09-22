import { forwardRef, type SVGProps, type Ref } from "react";
const Bridge = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 9.728V16m4-6.272V16m4 4V4m4 7-4-4A7.5 7.5 0 0 1 6 7l-4 4m20 5H2m4 4V4" /></svg>);
Bridge.displayName = "Bridge";
export default Bridge;