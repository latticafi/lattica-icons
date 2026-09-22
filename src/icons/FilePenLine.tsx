import { forwardRef, type SVGProps, type Ref } from "react";
const FilePenLine = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.487 7.858A1 1 0 0 1 14 7V2m.364 11.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837c.323-.094.616-.268.854-.506l4.013-4.009a2.124 2.124 0 1 0-3.004-3.004z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516M8 18h1" /></svg>);
FilePenLine.displayName = "FilePenLine";
export default FilePenLine;