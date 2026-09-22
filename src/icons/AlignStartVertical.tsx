import { forwardRef, type SVGProps, type Ref } from "react";
const AlignStartVertical = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 14H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m7-10H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M2 2v20" /></svg>);
AlignStartVertical.displayName = "AlignStartVertical";
export default AlignStartVertical;