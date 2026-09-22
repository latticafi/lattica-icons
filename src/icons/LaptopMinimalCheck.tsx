import { forwardRef, type SVGProps, type Ref } from "react";
const LaptopMinimalCheck = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 20h20M9 10l2 2 4-4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 4H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" /></svg>);
LaptopMinimalCheck.displayName = "LaptopMinimalCheck";
export default LaptopMinimalCheck;