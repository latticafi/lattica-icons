import { forwardRef, type SVGProps, type Ref } from "react";
const TowelRack = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 7h-2M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5A2.5 2.5 0 0 0 6.5 3m0 0A2.5 2.5 0 0 0 4 5.5V17a1 1 0 0 0 1 1h4M9 7H2" /></svg>);
TowelRack.displayName = "TowelRack";
export default TowelRack;