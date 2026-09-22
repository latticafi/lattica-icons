import { forwardRef, type SVGProps, type Ref } from "react";
const PanelLeftRightDashed = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 10V9m0 6v-1m0 7v-2m0-14V3m-6 7V9m0 6v-1m0 7v-2M9 5V3m10 0H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" /></svg>);
PanelLeftRightDashed.displayName = "PanelLeftRightDashed";
export default PanelLeftRightDashed;