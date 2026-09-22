import { forwardRef, type SVGProps, type Ref } from "react";
const MapPinCheckInside = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.601 21.799C14.461 20.193 20 14.993 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 10 2 2 4-4" /></svg>);
MapPinCheckInside.displayName = "MapPinCheckInside";
export default MapPinCheckInside;