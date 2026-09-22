import { forwardRef, type SVGProps, type Ref } from "react";
const Phi = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14" /></svg>);
Phi.displayName = "Phi";
export default Phi;