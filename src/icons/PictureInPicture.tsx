import { forwardRef, type SVGProps, type Ref } from "react";
const PictureInPicture = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 4v6H2m6 0L2 4m19 6V7a2 2 0 0 0-2-2h-7m-9 9v2a2 2 0 0 0 2 2h3m13-4h-8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1" /></svg>);
PictureInPicture.displayName = "PictureInPicture";
export default PictureInPicture;