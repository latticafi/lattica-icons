import { forwardRef, type SVGProps, type Ref } from "react";
const AlignHorizontalSpaceAround = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 7h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M4 22V2m16 20V2" /></svg>);
AlignHorizontalSpaceAround.displayName = "AlignHorizontalSpaceAround";
export default AlignHorizontalSpaceAround;