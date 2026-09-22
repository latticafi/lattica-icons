import { forwardRef, type SVGProps, type Ref } from "react";
const PilcrowLeft = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 3v11m0-5h-3a3 3 0 0 1 0-6h9m-2 0v11m4 4H2m4 4-4-4 4-4" /></svg>);
PilcrowLeft.displayName = "PilcrowLeft";
export default PilcrowLeft;