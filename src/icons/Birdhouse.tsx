import { forwardRef, type SVGProps, type Ref } from "react";
const Birdhouse = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 18v4m5-4 1.956-11.468M3 8l7.82-5.615a2 2 0 0 1 2.36 0L21 8M4 18h16M7 18 5.044 6.532M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Birdhouse.displayName = "Birdhouse";
export default Birdhouse;