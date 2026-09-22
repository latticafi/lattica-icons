import { forwardRef, type SVGProps, type Ref } from "react";
const Map = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 20.765a2 2 0 0 1-.894-.21l-4.212-2.107a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 .894.211m0 0a2 2 0 0 0 .894-.21l3.659-1.83A1 1 0 0 1 21 4.618v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-.894.211m0-15v15M9 3.236v15" /></svg>);
Map.displayName = "Map";
export default Map;