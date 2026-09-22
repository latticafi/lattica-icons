import { forwardRef, type SVGProps, type Ref } from "react";
const Lollipop = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3M11 11a2 2 0 0 0 4 0 4 4 0 1 0-8 0 6 6 0 1 0 12 0" /></svg>);
Lollipop.displayName = "Lollipop";
export default Lollipop;