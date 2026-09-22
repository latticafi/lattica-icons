import { forwardRef, type SVGProps, type Ref } from "react";
const Heading6 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 12h8m-8 6V6m8 12V6m7 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 10c-2 2-3 3.5-3 6" /></svg>);
Heading6.displayName = "Heading6";
export default Heading6;