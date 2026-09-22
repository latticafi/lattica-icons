import { forwardRef, type SVGProps, type Ref } from "react";
const Binary = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 16a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0zM10 6a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0zM6 20h4m4-10h4M6 14h2v6m6-16h2v6" /></svg>);
Binary.displayName = "Binary";
export default Binary;