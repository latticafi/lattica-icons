import { forwardRef, type SVGProps, type Ref } from "react";
const QrCode = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 3H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m13 0h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M7 16H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m14 0h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1" /></svg>);
QrCode.displayName = "QrCode";
export default QrCode;