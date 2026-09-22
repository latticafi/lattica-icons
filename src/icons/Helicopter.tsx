import { forwardRef, type SVGProps, type Ref } from "react";
const Helicopter = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 17v4m3-18v8a2 2 0 0 0 2 2h5.865M17 17v4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 10v5M6 3h16M7 21h14M8 13H2m16 4a4 4 0 0 0 4-4c0-1.591-.843-3.117-2.343-4.243C18.157 7.632 16.122 7 14 7c-1.591 0-3.117.527-4.243 1.464C8.632 9.402 8 10.674 8 12v3a2 2 0 0 0 2 2z" /></svg>);
Helicopter.displayName = "Helicopter";
export default Helicopter;