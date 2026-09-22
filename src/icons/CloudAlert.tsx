import { forwardRef, type SVGProps, type Ref } from "react";
const CloudAlert = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 12v4m0 4h.01m-3.882-3.051A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 1 1 0 9h-1.642" /></svg>);
CloudAlert.displayName = "CloudAlert";
export default CloudAlert;