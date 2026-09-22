import { forwardRef, type SVGProps, type Ref } from "react";
const Eye = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.062 11.652a1 1 0 0 0 0 .696 10.75 10.75 0 0 0 19.876 0 1 1 0 0 0 0-.696 10.75 10.75 0 0 0-19.876 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
Eye.displayName = "Eye";
export default Eye;