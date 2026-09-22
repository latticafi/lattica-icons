import { forwardRef, type SVGProps, type Ref } from "react";
const Armchair = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 18a2 2 0 0 1-2-2v-5a2 2 0 0 1 4 0v1.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V11a2 2 0 1 1 4 0v5a2 2 0 0 1-2 2M5 18h14M5 18v2m14-2v2" /></svg>);
Armchair.displayName = "Armchair";
export default Armchair;