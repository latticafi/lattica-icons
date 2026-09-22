import { forwardRef, type SVGProps, type Ref } from "react";
const Heading2 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 12h8m-8 6V6m8 12V6m9 12h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" /></svg>);
Heading2.displayName = "Heading2";
export default Heading2;