import { forwardRef, type SVGProps, type Ref } from "react";
const BookCopy = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 7a2 2 0 0 0-2 2v11" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.803 18H5a2 2 0 1 0 0 4h9.5a.5.5 0 0 0 .5-.5V21m-6-6V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1-2-2m0 0a2 2 0 0 1 2-2h10" /></svg>);
BookCopy.displayName = "BookCopy";
export default BookCopy;