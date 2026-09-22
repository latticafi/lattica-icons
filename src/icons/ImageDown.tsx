import { forwardRef, type SVGProps, type Ref } from "react";
const ImageDown = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21m14-2-3 3-3-3m3 3v-5.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
ImageDown.displayName = "ImageDown";
export default ImageDown;