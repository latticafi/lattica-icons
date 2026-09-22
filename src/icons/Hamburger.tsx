import { forwardRef, type SVGProps, type Ref } from "react";
const Hamburger = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 0 1 0 4h-4.25M5 12a2 2 0 0 1-2-2c0-1.857.948-3.637 2.636-4.95C7.324 3.738 9.613 3 12 3s4.676.737 6.364 2.05S21 8.143 21 10a2 2 0 0 1-2 2M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" /></svg>);
Hamburger.displayName = "Hamburger";
export default Hamburger;