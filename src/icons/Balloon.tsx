import { forwardRef, type SVGProps, type Ref } from "react";
const Balloon = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1M12 6a2 2 0 0 1 2 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16c2.5 0 6-4 6-8A6 6 0 1 0 6 8c0 4 3.5 8 6 8" /></svg>);
Balloon.displayName = "Balloon";
export default Balloon;