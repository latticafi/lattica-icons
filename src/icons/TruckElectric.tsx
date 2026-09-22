import { forwardRef, type SVGProps, type Ref } from "react";
const TruckElectric = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 19V7a2 2 0 0 0-2-2H9m6 14H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14M2 13v5a1 1 0 0 0 1 1h2M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
TruckElectric.displayName = "TruckElectric";
export default TruckElectric;