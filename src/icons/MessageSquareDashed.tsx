import { forwardRef, type SVGProps, type Ref } from "react";
const MessageSquareDashed = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 3h2m0 16h-2M2 12v-2m0 6v5.286a.71.71 0 0 0 1.212.502l1.149-1.149M20 19a2 2 0 0 0 2-2v-1m0-6v2m0-6V5a2 2 0 0 0-2-2M4 3a2 2 0 0 0-2 2v1m6 13h2M8 3h2" /></svg>);
MessageSquareDashed.displayName = "MessageSquareDashed";
export default MessageSquareDashed;