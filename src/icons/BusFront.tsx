import { forwardRef, type SVGProps, type Ref } from "react";
const BusFront = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 6 2 7m8-1h4m8 1-2-1m-2-3H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M4 11h16M8 15h.01M16 15h.01M6 19v2m12 0v-2" /></svg>);
BusFront.displayName = "BusFront";
export default BusFront;