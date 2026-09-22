import { forwardRef, type SVGProps, type Ref } from "react";
const Popcorn = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 8a2 2 0 0 0 0-4 2 2 0 1 0-4 0 2 2 0 1 0-4 0 2 2 0 1 0-4 0 2 2 0 1 0 0 4m4 14L9 8m5 14 1-14" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1z" /></svg>);
Popcorn.displayName = "Popcorn";
export default Popcorn;