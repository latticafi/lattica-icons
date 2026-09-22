import { forwardRef, type SVGProps, type Ref } from "react";
const NotebookText = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 6h4m-4 4h4m-4 4h4m-4 4h4M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M9.5 8h5m-5 4H16m-6.5 4H14" /></svg>);
NotebookText.displayName = "NotebookText";
export default NotebookText;