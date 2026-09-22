import { forwardRef, type SVGProps, type Ref } from "react";
const Haze = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m5.2 6.2 1.4 1.4M2 13h2m16 0h2m-4.6-5.4 1.4-1.4M22 17H2m20 4H2m14-8a4 4 0 1 0-8 0m4-8V2.5" /></svg>);
Haze.displayName = "Haze";
export default Haze;