import { forwardRef, type SVGProps, type Ref } from "react";
const ImageUpscale = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 8V3h-5m5 0-5 5m1 13h2a2 2 0 0 0 2-2m0-7v3M3 7V5a2 2 0 0 1 2-2m0 18 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19M9 3h3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 11H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1" /></svg>);
ImageUpscale.displayName = "ImageUpscale";
export default ImageUpscale;