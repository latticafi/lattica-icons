import { forwardRef, type SVGProps, type Ref } from "react";
const CornerDownRight = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15 10 5 5-5 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 4v7a4 4 0 0 0 4 4h12" /></svg>);
CornerDownRight.displayName = "CornerDownRight";
export default CornerDownRight;