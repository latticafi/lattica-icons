import { forwardRef, type SVGProps, type Ref } from "react";
const Beef = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m18.5 6 1.754 3.5a6.48 6.48 0 0 1-1.854 8.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /></svg>);
Beef.displayName = "Beef";
export default Beef;