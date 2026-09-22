import { forwardRef, type SVGProps, type Ref } from "react";
const DoorClosedLocked = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 8V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m-3 0h8m10-5v-2a2 2 0 0 0-4 0v2m-7-4h.01" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 16h-6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1" /></svg>);
DoorClosedLocked.displayName = "DoorClosedLocked";
export default DoorClosedLocked;