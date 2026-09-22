import { forwardRef, type SVGProps, type Ref } from "react";
const HeartHandshake = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.409 5.824 9.586 8.586a2 2 0 0 0 2.828 2.828l1.71-1.71a2.41 2.41 0 0 1 3.409 0l1.881 1.882a2 2 0 0 1 0 2.828C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676m7.005 8.59a2.124 2.124 0 0 1-3.004 0 2.124 2.124 0 1 1-3 3 2.12 2.12 0 0 1 .004 3 2 2 0 0 1-2.879-.052L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.675.6.6 0 0 0 .818-.001" /></svg>);
HeartHandshake.displayName = "HeartHandshake";
export default HeartHandshake;