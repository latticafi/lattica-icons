import { forwardRef, type SVGProps, type Ref } from "react";
const Crop = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 2v14a2 2 0 0 0 2 2h14" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 22V8a2 2 0 0 0-2-2H2" /></svg>);
Crop.displayName = "Crop";
export default Crop;