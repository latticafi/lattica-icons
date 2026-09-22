import { forwardRef, type SVGProps, type Ref } from "react";
const MessageCircleReply = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.086 17.509a2 2 0 0 0-.094-1.167 10 10 0 1 1 4.777 4.719 2 2 0 0 0-1.099-.092l-3.413.998a1 1 0 0 1-1.236-1.168z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 15-3-3 3-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 12h8a2 2 0 0 1 2 2v1" /></svg>);
MessageCircleReply.displayName = "MessageCircleReply";
export default MessageCircleReply;