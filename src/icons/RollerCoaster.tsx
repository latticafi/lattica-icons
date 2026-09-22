import { forwardRef, type SVGProps, type Ref } from "react";
const RollerCoaster = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 19V5m12 8c-2 0-4-1.33-6-4S8 5 6 5a4 4 0 0 0-4 4v10m8 0V6.8M14 19v-7.8M18 5v4m0 10v-6m0 0a4 4 0 1 0-3-6.65M22 19V9" /></svg>);
RollerCoaster.displayName = "RollerCoaster";
export default RollerCoaster;