import { forwardRef, type SVGProps, type Ref } from "react";
const PilcrowRight = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 3v11m0-5H7a3 3 0 1 1 0-6h8m-1 0v11m4 8 4-4-4-4m4 4H2" /></svg>);
PilcrowRight.displayName = "PilcrowRight";
export default PilcrowRight;