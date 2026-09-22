import { forwardRef, type SVGProps, type Ref } from "react";
const MailClock = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 14v2.2l1.6 1M22 7l-.759.484M6.835 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2M7.605 10.567 2 7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12" /></svg>);
MailClock.displayName = "MailClock";
export default MailClock;