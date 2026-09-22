import { forwardRef, type SVGProps, type Ref } from "react";
const LayerArrowUp = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14V4m3 3-3-3-3 3m-1.326 3.774L2.58 13.09a1 1 0 0 0 0 1.822l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 .59-.92 1 1 0 0 0-.59-.922l-5.078-2.308" /></svg>);
LayerArrowUp.displayName = "LayerArrowUp";
export default LayerArrowUp;