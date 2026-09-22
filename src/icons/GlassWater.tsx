import { forwardRef, type SVGProps, type Ref } from "react";
const GlassWater = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .95.691c.044.134.059.275.044.414L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" /></svg>);
GlassWater.displayName = "GlassWater";
export default GlassWater;