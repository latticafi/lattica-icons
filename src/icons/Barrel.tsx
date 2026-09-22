import { forwardRef, type SVGProps, type Ref } from "react";
const Barrel = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 3a41 41 0 0 0 0 18m4-18a41 41 0 0 1 0 18" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.54 16h16.914M3.54 8h16.914m-3.457 13a2 2 0 0 0 1.68-.92 15.25 15.25 0 0 0 0-16.16 2 2 0 0 0-1.68-.92h-10a2 2 0 0 0-1.681.92 15.25 15.25 0 0 0 0 16.16 2 2 0 0 0 1.681.92z" /></svg>);
Barrel.displayName = "Barrel";
export default Barrel;