import { forwardRef, type SVGProps, type Ref } from "react";
const CassetteTape = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0h8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 20l.7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" /></svg>);
CassetteTape.displayName = "CassetteTape";
export default CassetteTape;