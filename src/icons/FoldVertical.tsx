import { forwardRef, type SVGProps, type Ref } from "react";
const FoldVertical = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22v-6m-3 3 3-3 3 3M12 8V2M9 5l3 3 3-3M4 12H2m8 0H8m8 0h-2m8 0h-2" /></svg>);
FoldVertical.displayName = "FoldVertical";
export default FoldVertical;