import { forwardRef, type SVGProps, type Ref } from "react";
const CartonOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 10H5v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1m-6 3v-9m.902-4.755L16 6h-4.343" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 13.343V10a2 2 0 0 0-.539-1.367L16 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-.857.486M2 2l20 20M7.034 7.034 5.539 8.633A2 2 0 0 0 5 10" /></svg>);
CartonOff.displayName = "CartonOff";
export default CartonOff;