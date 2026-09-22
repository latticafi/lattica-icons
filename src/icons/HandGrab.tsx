import { forwardRef, type SVGProps, type Ref } from "react";
const HandGrab = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 11.5V9a2 2 0 1 0-4 0v1.4m0-.4V8a2 2 0 1 0-4 0v2m0-.1V9a2 2 0 1 0-4 0v5a2 2 0 0 0-4 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 0 1 4 0" /></svg>);
HandGrab.displayName = "HandGrab";
export default HandGrab;