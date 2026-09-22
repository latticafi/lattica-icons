import { forwardRef, type SVGProps, type Ref } from "react";
const AlignEndVertical = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 4H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 10h-5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m6 8V2" /></svg>);
AlignEndVertical.displayName = "AlignEndVertical";
export default AlignEndVertical;