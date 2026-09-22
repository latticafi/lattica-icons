import { forwardRef, type SVGProps, type Ref } from "react";
const SquareUserRound = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 21a6 6 0 1 0-12 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" /></svg>);
SquareUserRound.displayName = "SquareUserRound";
export default SquareUserRound;