import { forwardRef, type SVGProps, type Ref } from "react";
const DoorStairwell = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 17v-3a1 1 0 0 1 1-1h6m0 4h-9a1 1 0 0 0-1 1v3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 9h-3a1 1 0 0 0-1 1v3m7 8H2" /></svg>);
DoorStairwell.displayName = "DoorStairwell";
export default DoorStairwell;