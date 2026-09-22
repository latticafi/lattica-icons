import { forwardRef, type SVGProps, type Ref } from "react";
const ChevronsLeftRightEllipsis = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01M16 12h.01M17 7l5 5-5 5M7 7l-5 5 5 5m1-5h.01" /></svg>);
ChevronsLeftRightEllipsis.displayName = "ChevronsLeftRightEllipsis";
export default ChevronsLeftRightEllipsis;