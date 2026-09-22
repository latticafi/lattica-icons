import { forwardRef, type SVGProps, type Ref } from "react";
const BookHeadphones = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5m0 0A2.5 2.5 0 0 1 6.5 17H20" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 12v-2a4 4 0 0 1 8 0v2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></svg>);
BookHeadphones.displayName = "BookHeadphones";
export default BookHeadphones;