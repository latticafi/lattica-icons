import { forwardRef, type SVGProps, type Ref } from "react";
const NotebookDot = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 11.75V22M2 10h4m-4 4h4m-4 4h4M2 6h4m14 5.75V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5.65" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
NotebookDot.displayName = "NotebookDot";
export default NotebookDot;