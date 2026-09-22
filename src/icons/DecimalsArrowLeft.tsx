import { forwardRef, type SVGProps, type Ref } from "react";
const DecimalsArrowLeft = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13 15-3 3 3 3m-3-3h10M3 11h.01M11 5.5a2.5 2.5 0 0 0-5 0v3a2.5 2.5 0 0 0 5 0z" /></svg>);
DecimalsArrowLeft.displayName = "DecimalsArrowLeft";
export default DecimalsArrowLeft;