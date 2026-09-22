import { forwardRef, type SVGProps, type Ref } from "react";
const TrianglesCenterlineDashedVertical = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14v2m0 4v2m0-20v2m0 4v2m8.288 6.703A1 1 0 0 0 22 16V8a1 1 0 0 0-1.712-.703l-3.99 3.991a1 1 0 0 0-.001 1.424zm-16.576 0A1 1 0 0 1 2 16V8a1 1 0 0 1 1.712-.703l3.99 3.991a1 1 0 0 1 .001 1.424z" /></svg>);
TrianglesCenterlineDashedVertical.displayName = "TrianglesCenterlineDashedVertical";
export default TrianglesCenterlineDashedVertical;