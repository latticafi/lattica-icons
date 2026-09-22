import { forwardRef, type SVGProps, type Ref } from "react";
const Wheat = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 22 16 8m0 0h2a4 4 0 0 0 4-4V2h-2a4 4 0 0 0-4 4zM3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13 19-1.53-1.53a3.5 3.5 0 0 0-4.94 0L5 19l1.53 1.53a3.5 3.5 0 0 0 4.94 0zm4-4-1.53-1.53a3.5 3.5 0 0 0-4.94 0L9 15l1.53 1.53a3.5 3.5 0 0 0 4.94 0zm4-4-1.53-1.53a3.5 3.5 0 0 0-4.94 0L13 11l1.53 1.53a3.5 3.5 0 0 0 4.94 0z" /></svg>);
Wheat.displayName = "Wheat";
export default Wheat;