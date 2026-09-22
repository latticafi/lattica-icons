import { forwardRef, type SVGProps, type Ref } from "react";
const Bike = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-13 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-3 11.5V14l-3-3 4-3 2 3h2" /></svg>);
Bike.displayName = "Bike";
export default Bike;