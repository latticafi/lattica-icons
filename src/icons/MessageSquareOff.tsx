import { forwardRef, type SVGProps, type Ref } from "react";
const MessageSquareOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826M2 2l20 20M8.656 3H20a2 2 0 0 1 2 2v11.344" /></svg>);
MessageSquareOff.displayName = "MessageSquareOff";
export default MessageSquareOff;