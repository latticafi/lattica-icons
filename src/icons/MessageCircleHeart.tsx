import { forwardRef, type SVGProps, type Ref } from "react";
const MessageCircleHeart = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.086 17.509a2 2 0 0 0-.094-1.167 10 10 0 1 1 4.777 4.719 2 2 0 0 0-1.099-.092l-3.413.998a1 1 0 0 1-1.236-1.168z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.307l-3.447 3.62a1 1 0 0 1-1.45-.001z" /></svg>);
MessageCircleHeart.displayName = "MessageCircleHeart";
export default MessageCircleHeart;