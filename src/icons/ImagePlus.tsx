import { forwardRef, type SVGProps, type Ref } from "react";
const ImagePlus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 5h6m-3-3v6m2 3.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21m3-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
ImagePlus.displayName = "ImagePlus";
export default ImagePlus;