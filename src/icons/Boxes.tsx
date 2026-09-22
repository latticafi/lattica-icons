import { forwardRef, type SVGProps, type Ref } from "react";
const Boxes = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 19-3.97 2.38a2 2 0 0 1-2.06 0l-3-1.8A2 2 0 0 1 2 17.87v-3.24a2 2 0 0 1 .97-1.71L7 10.5l5 3m0 5.5v-5.5m0 5.5 3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3m0 0-5 3m5-3 5 3m-10 0-4.74-2.85M7 16.5v5.17m10-5.17 4.74-2.85M17 16.5v5.17" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 13.5-5-3V6.13a2 2 0 0 1 .97-1.71l3-1.8a2 2 0 0 1 2.06 0l3 1.8A2 2 0 0 1 17 6.13v4.37zm0 0V8m0 0L7.26 5.15M12 8l4.74-2.85" /></svg>);
Boxes.displayName = "Boxes";
export default Boxes;