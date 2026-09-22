import { forwardRef, type SVGProps, type Ref } from "react";
const CornerDownLeft = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 4v7a4 4 0 0 1-4 4H4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 10-5 5 5 5" /></svg>);
CornerDownLeft.displayName = "CornerDownLeft";
export default CornerDownLeft;