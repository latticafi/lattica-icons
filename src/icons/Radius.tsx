import { forwardRef, type SVGProps, type Ref } from "react";
const Radius = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20.34 17.52a10 10 0 1 0-2.82 2.82" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-5.59-7.59 4.18 4.18M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Radius.displayName = "Radius";
export default Radius;