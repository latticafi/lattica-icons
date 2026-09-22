import { forwardRef, type SVGProps, type Ref } from "react";
const LayersMinus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 17h6M2.003 11.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18m-10.007-.005a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 1.66 0l2.11-.96m7.068-8.856a1 1 0 0 1-.598.916l-.177.08M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.832z" /></svg>);
LayersMinus.displayName = "LayersMinus";
export default LayersMinus;