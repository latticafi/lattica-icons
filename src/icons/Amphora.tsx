import { forwardRef, type SVGProps, type Ref } from "react";
const Amphora = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 5H8a2 2 0 1 0 0 4h.68M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 5h2a2 2 0 0 1 0 4h-.68M18 22H6M9 2h6" /></svg>);
Amphora.displayName = "Amphora";
export default Amphora;