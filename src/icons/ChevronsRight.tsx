import { forwardRef, type SVGProps, type Ref } from "react";
const ChevronsRight = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6 17 5-5-5-5m7 10 5-5-5-5" /></svg>);
ChevronsRight.displayName = "ChevronsRight";
export default ChevronsRight;