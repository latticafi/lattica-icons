import { forwardRef, type SVGProps, type Ref } from "react";
const MoveHorizontal = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m18 16 4-4-4-4m4 4H2m4 4-4-4 4-4" /></svg>);
MoveHorizontal.displayName = "MoveHorizontal";
export default MoveHorizontal;