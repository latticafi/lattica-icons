import { forwardRef, type SVGProps, type Ref } from "react";
const ImageMinus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7m4 2h6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12 4-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>);
ImageMinus.displayName = "ImageMinus";
export default ImageMinus;