import { forwardRef, type SVGProps, type Ref } from "react";
const ReplyAll = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 17-5-5 5-5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 18v-2a4 4 0 0 0-4-4H7m0 5-5-5 5-5" /></svg>);
ReplyAll.displayName = "ReplyAll";
export default ReplyAll;