import { forwardRef, type SVGProps, type Ref } from "react";
const PanelTopBottomDashed = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 15h1m-1-6h1m4 6h2m-2-6h2M3 15h2M3 9h2m4 6h1M9 9h1m9-6H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" /></svg>);
PanelTopBottomDashed.displayName = "PanelTopBottomDashed";
export default PanelTopBottomDashed;