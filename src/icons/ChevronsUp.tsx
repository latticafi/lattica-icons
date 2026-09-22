import { forwardRef, type SVGProps, type Ref } from "react";
const ChevronsUp = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 11-5-5-5 5m10 7-5-5-5 5" /></svg>);
ChevronsUp.displayName = "ChevronsUp";
export default ChevronsUp;