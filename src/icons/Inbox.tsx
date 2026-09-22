import { forwardRef, type SVGProps, type Ref } from "react";
const Inbox = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 12h-6l-2 3h-4l-2-3H2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2 12 3.45-6.89A2 2 0 0 1 7.24 4h9.52a2 2 0 0 1 1.79 1.11L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" /></svg>);
Inbox.displayName = "Inbox";
export default Inbox;