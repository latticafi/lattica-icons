import { forwardRef, type SVGProps, type Ref } from "react";
const Locate = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 12h3m14 0h3M12 2v3m0 14v3m0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14" /></svg>);
Locate.displayName = "Locate";
export default Locate;