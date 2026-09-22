import { forwardRef, type SVGProps, type Ref } from "react";
const AlignVerticalSpaceAround = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 9H9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m7 11H2M22 4H2" /></svg>);
AlignVerticalSpaceAround.displayName = "AlignVerticalSpaceAround";
export default AlignVerticalSpaceAround;