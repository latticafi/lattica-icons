import { forwardRef, type SVGProps, type Ref } from "react";
const PersonStanding = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 20l3-6m0 0 3 6m-3-6v-4M6 8l6 2m0 0 6-2" /></svg>);
PersonStanding.displayName = "PersonStanding";
export default PersonStanding;