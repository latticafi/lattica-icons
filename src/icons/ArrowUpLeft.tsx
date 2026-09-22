import { forwardRef, type SVGProps, type Ref } from "react";
const ArrowUpLeft = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 7H7v10M7 7l10 10" /></svg>);
ArrowUpLeft.displayName = "ArrowUpLeft";
export default ArrowUpLeft;