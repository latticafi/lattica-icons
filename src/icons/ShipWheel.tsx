import { forwardRef, type SVGProps, type Ref } from "react";
const ShipWheel = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-18v7.5M19 5l-5.23 5.23M22 12h-7.5m4.5 7-5.23-5.23M12 14.5V22m-1.77-8.23L5 19m4.5-7H2m8.23-1.77L5 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /></svg>);
ShipWheel.displayName = "ShipWheel";
export default ShipWheel;