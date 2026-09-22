import { forwardRef, type SVGProps, type Ref } from "react";
const Droplet = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.95 19.95A7 7 0 0 1 5 15c0-2 1-3.9 3-5.5s3.5-4 4-6.5c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 0 1-2.05 4.95" /></svg>);
Droplet.displayName = "Droplet";
export default Droplet;