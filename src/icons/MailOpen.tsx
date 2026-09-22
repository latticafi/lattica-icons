import { forwardRef, type SVGProps, type Ref } from "react";
const MailOpen = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" /></svg>);
MailOpen.displayName = "MailOpen";
export default MailOpen;