import { forwardRef, type SVGProps, type Ref } from "react";
const MoveVertical = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m4-16-4-4-4 4m8 12-4 4-4-4" /></svg>);
MoveVertical.displayName = "MoveVertical";
export default MoveVertical;