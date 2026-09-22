import { forwardRef, type SVGProps, type Ref } from "react";
const Ellipse = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 18c5.523 0 10-2.686 10-6s-4.477-6-10-6S2 8.686 2 12s4.477 6 10 6" /></svg>);
Ellipse.displayName = "Ellipse";
export default Ellipse;