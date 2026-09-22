import { forwardRef, type SVGProps, type Ref } from "react";
const SatelliteDish = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 12a6 6 0 0 0-6-6m10 6A10 10 0 0 0 12 2M9 15l4-4m-10.176-.541a8 8 0 0 0 10.717 10.717c.558-.276.623-1.012.183-1.452l-9.448-9.448c-.44-.44-1.176-.375-1.452.183" /></svg>);
SatelliteDish.displayName = "SatelliteDish";
export default SatelliteDish;