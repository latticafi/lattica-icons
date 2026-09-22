import { forwardRef, type SVGProps, type Ref } from "react";
const Transgender = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16v6m2-2h-4M22 6V2h-4m4 0-7.17 7.17M2 2l7.17 7.17M5.357 2H2v3.355M8 5 5 8m7 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></svg>);
Transgender.displayName = "Transgender";
export default Transgender;