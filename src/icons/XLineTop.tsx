import { forwardRef, type SVGProps, type Ref } from "react";
const XLineTop = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 4H6m12 4L6 20M6 8l12 12" /></svg>);
XLineTop.displayName = "XLineTop";
export default XLineTop;