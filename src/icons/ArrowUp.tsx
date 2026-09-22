import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowUp = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m19 12-7-7-7 7m7-7v14" /></svg>);
ArrowUp.displayName = "ArrowUp";
export default ArrowUp;