import { forwardRef, type SVGProps, type Ref } from "react";
const Underline = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 4v6a6 6 0 1 0 12 0V4M4 20h16" /></svg>);
Underline.displayName = "Underline";
export default Underline;