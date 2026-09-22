import { forwardRef, type SVGProps, type Ref } from "react";
const MoveUpRight = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 11V5h-6m6 0L5 19" /></svg>);
MoveUpRight.displayName = "MoveUpRight";
export default MoveUpRight;