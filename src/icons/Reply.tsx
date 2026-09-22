import { forwardRef, type SVGProps, type Ref } from "react";
const Reply = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 18v-2a4 4 0 0 0-4-4H4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 17-5-5 5-5" /></svg>);
Reply.displayName = "Reply";
export default Reply;