import { forwardRef, type SVGProps, type Ref } from "react";
const Piano = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 13v4m4-4v4m4-4v4M2 13h20M6 13v4m16-5.5A3.5 3.5 0 0 0 18.5 8a3.52 3.52 0 0 1-3.173-2A7 7 0 0 0 2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" /></svg>);
Piano.displayName = "Piano";
export default Piano;