import { forwardRef, type SVGProps, type Ref } from "react";
const Images = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 2H10a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2" /></svg>);
Images.displayName = "Images";
export default Images;