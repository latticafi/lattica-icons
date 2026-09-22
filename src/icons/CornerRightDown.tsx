import { forwardRef, type SVGProps, type Ref } from "react";
const CornerRightDown = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 15 5 5 5-5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 4h7a4 4 0 0 1 4 4v12" /></svg>);
CornerRightDown.displayName = "CornerRightDown";
export default CornerRightDown;