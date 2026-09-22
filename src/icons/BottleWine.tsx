import { forwardRef, type SVGProps, type Ref } from "react";
const BottleWine = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4" /></svg>);
BottleWine.displayName = "BottleWine";
export default BottleWine;