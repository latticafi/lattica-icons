import { forwardRef, type SVGProps, type Ref } from "react";
const Truck = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Truck.displayName = "Truck";
export default Truck;