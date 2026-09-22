import { forwardRef, type SVGProps, type Ref } from "react";
const MailX = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 12.532V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.792" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7m14.5 9.5 5 5m0-5-5 5" /></svg>);
MailX.displayName = "MailX";
export default MailX;