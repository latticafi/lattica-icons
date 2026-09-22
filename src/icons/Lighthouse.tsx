import { forwardRef, type SVGProps, type Ref } from "react";
const Lighthouse = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 3V2m0 1a3 3 0 0 0-3 3v5L7 22l9.066-5.135M12 3a3 3 0 0 1 3 3v5l2 11m2.792-17.5.866-.5m-.861 9.5.866.5M21 9h1M3 9H2m2.203 4.5-.866.5m.871-9.5L3.342 4M5.5 22h13M7.932 16.875l7.377-4.178M8 11h8M8 7h8" /></svg>);
Lighthouse.displayName = "Lighthouse";
export default Lighthouse;