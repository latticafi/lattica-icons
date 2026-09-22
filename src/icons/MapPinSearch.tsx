import { forwardRef, type SVGProps, type Ref } from "react";
const MapPinSearch = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.248 21.969a1 1 0 0 1-.849-.17C9.539 20.193 4 14.993 4 10a8 8 0 1 1 16 0q0 .63-.112 1.262M22 22l-1.88-1.88" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
MapPinSearch.displayName = "MapPinSearch";
export default MapPinSearch;