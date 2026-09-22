import { forwardRef, type SVGProps, type Ref } from "react";
const Droplets = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3a6.6 6.6 0 0 1-2.29 3.76C3.56 9.98 3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" /></svg>);
Droplets.displayName = "Droplets";
export default Droplets;