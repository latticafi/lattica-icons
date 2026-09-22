import { forwardRef, type SVGProps, type Ref } from "react";
const Move = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m3-17-3-3-3 3m0 14 3 3 3-3m4-4 3-3-3-3m3 3H2m3 3-3-3 3-3" /></svg>);
Move.displayName = "Move";
export default Move;