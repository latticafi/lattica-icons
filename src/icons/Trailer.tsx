import { forwardRef, type SVGProps, type Ref } from "react";
const Trailer = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 11.341V10m4 3v-3m4 7V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 15v1a1 1 0 0 1-1 1H10m-4-5.659V10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Trailer.displayName = "Trailer";
export default Trailer;