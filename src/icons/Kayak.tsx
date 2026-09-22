import { forwardRef, type SVGProps, type Ref } from "react";
const Kayak = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.293 17.293A1 1 0 0 1 18 17h1a2 2 0 1 1-2 2v-1a1 1 0 0 1 .293-.707m0 0L6.707 6.707m0 0A1 1 0 0 1 6 7H5a2 2 0 1 1 2-2v1a1 1 0 0 1-.293.707M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" /></svg>);
Kayak.displayName = "Kayak";
export default Kayak;