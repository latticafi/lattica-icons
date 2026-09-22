import { forwardRef, type SVGProps, type Ref } from "react";
const ZodiacCancer = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 14.5c.001 1.298-.536 2.567-1.541 3.642-1.006 1.076-2.435 1.91-4.102 2.393a12.3 12.3 0 0 1-5.254.323c-1.757-.273-3.36-.92-4.603-1.858M3 9.5c-.001-1.298.536-2.566 1.541-3.642C5.547 4.783 6.976 3.95 8.643 3.465a12.3 12.3 0 0 1 5.254-.323c1.757.274 3.36.92 4.603 1.858" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-11-5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" /></svg>);
ZodiacCancer.displayName = "ZodiacCancer";
export default ZodiacCancer;