import { forwardRef, type SVGProps, type Ref } from "react";
const Mailbox = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 9h3v2M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2m-3-9h1" /></svg>);
Mailbox.displayName = "Mailbox";
export default Mailbox;