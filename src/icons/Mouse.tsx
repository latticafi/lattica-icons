import { forwardRef, type SVGProps, type Ref } from "react";
const Mouse = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 9A7 7 0 1 0 5 9v6a7 7 0 1 0 14 0zm-7-3v4" /></svg>);
Mouse.displayName = "Mouse";
export default Mouse;