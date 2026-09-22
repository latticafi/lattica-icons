import { forwardRef, type SVGProps, type Ref } from "react";
const MapPinX = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19.752 11.901c.16-.621.244-1.26.248-1.901a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0l.09-.077" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6m9.5 2.5-5 5m5 0-5-5" /></svg>);
MapPinX.displayName = "MapPinX";
export default MapPinX;