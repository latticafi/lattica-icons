import { forwardRef, type SVGProps, type Ref } from "react";
const Sunrise = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v8m4-4-4-4-4 4m-3.07 4.93 1.41 1.41M2 18h2m16 0h2m-2.93-7.07-1.41 1.41M22 22H2m14-4a4 4 0 1 0-8 0" /></svg>);
Sunrise.displayName = "Sunrise";
export default Sunrise;