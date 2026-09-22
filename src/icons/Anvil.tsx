import { forwardRef, type SVGProps, type Ref } from "react";
const Anvil = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4m0 0a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7M7 5v6a1 1 0 0 0 1 1h7m0 0v5m-6-5v5m-4 3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" /></svg>);
Anvil.displayName = "Anvil";
export default Anvil;