import { forwardRef, type SVGProps, type Ref } from "react";
const VenusAndMars = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 20h4m-2-4v6m9-16V2h-4m4 0-5.46 5.46M12 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10" /></svg>);
VenusAndMars.displayName = "VenusAndMars";
export default VenusAndMars;