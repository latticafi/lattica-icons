import { forwardRef, type SVGProps, type Ref } from "react";
const SwatchBook = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 17a4 4 0 1 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7m0-4h.01" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" /></svg>);
SwatchBook.displayName = "SwatchBook";
export default SwatchBook;