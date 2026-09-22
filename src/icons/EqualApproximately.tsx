import { forwardRef, type SVGProps, type Ref } from "react";
const EqualApproximately = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" /></svg>);
EqualApproximately.displayName = "EqualApproximately";
export default EqualApproximately;