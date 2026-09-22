import { forwardRef, type SVGProps, type Ref } from "react";
const Cloudy = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.5 12a4.501 4.501 0 0 1 1.722 8.657A4.5 4.5 0 0 1 17.5 21H9.006a7 7 0 1 1 6.702-9z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" /></svg>);
Cloudy.displayName = "Cloudy";
export default Cloudy;