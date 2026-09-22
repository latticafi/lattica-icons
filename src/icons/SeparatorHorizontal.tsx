import { forwardRef, type SVGProps, type Ref } from "react";
const SeparatorHorizontal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 16-4 4-4-4m-5-4h18M8 8l4-4 4 4" /></svg>);
SeparatorHorizontal.displayName = "SeparatorHorizontal";
export default SeparatorHorizontal;