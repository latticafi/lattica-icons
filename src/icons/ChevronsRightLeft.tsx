import { forwardRef, type SVGProps, type Ref } from "react";
const ChevronsRightLeft = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m20 17-5-5 5-5M4 17l5-5-5-5" /></svg>);
ChevronsRightLeft.displayName = "ChevronsRightLeft";
export default ChevronsRightLeft;