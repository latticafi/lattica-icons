import { forwardRef, type SVGProps, type Ref } from "react";
const MessageSquareDot = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
MessageSquareDot.displayName = "MessageSquareDot";
export default MessageSquareDot;