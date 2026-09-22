import { forwardRef, type SVGProps, type Ref } from "react";
const Fuel = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5m-4 16V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16m-1 0h13M3 9h11" /></svg>);
Fuel.displayName = "Fuel";
export default Fuel;