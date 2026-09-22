import { forwardRef, type SVGProps, type Ref } from "react";
const BookDashed = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 17h1.5M12 22h1.5M12 2h1.5m4 20H19a1 1 0 0 0 1-1M17.5 2H19a1 1 0 0 1 1 1v1.5m0 9.5v3h-2.5M20 8.5V10M4 10V8.5M8 22H6.5A2.5 2.5 0 0 1 4 19.5V14m0 5.5A2.5 2.5 0 0 1 6.5 17H8M4 4.5A2.5 2.5 0 0 1 6.5 2H8" /></svg>);
BookDashed.displayName = "BookDashed";
export default BookDashed;