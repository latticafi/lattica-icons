import { forwardRef, type SVGProps, type Ref } from "react";
const Vegan = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 8q6 0 6-6-6 0-6 6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.41 3.59a10 10 0 1 0 3 3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" /></svg>);
Vegan.displayName = "Vegan";
export default Vegan;