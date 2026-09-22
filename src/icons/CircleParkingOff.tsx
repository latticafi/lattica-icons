import { forwardRef, type SVGProps, type Ref } from "react";
const CircleParkingOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.656 7H13a3 3 0 0 1 2.984 3.307M13 13H9m10.071 6.071A10 10 0 1 1 4.93 4.93M2 2l20 20" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.357 2.687a10 10 0 0 1 12.956 12.956M9 17V9" /></svg>);
CircleParkingOff.displayName = "CircleParkingOff";
export default CircleParkingOff;