import { forwardRef, type SVGProps, type Ref } from "react";
const ImagePlay = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6m-5 0 5-5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
ImagePlay.displayName = "ImagePlay";
export default ImagePlay;