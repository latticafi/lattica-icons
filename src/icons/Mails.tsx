import { forwardRef, type SVGProps, type Ref } from "react";
const Mails = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732M22 5.5l-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 3H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" /></svg>);
Mails.displayName = "Mails";
export default Mails;