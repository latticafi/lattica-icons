import { forwardRef, type SVGProps, type Ref } from "react";
const LayerArrowDown = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 10v10m10-10a1 1 0 0 1-.59.92l-5.077 2.308" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22.017 10.005a1 1 0 0 0-.597-.916l-8.59-3.91a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0-.02 1.832l5.093 2.316M9 17l3 3 3-3" /></svg>);
LayerArrowDown.displayName = "LayerArrowDown";
export default LayerArrowDown;