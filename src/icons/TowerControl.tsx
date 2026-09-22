import { forwardRef, type SVGProps, type Ref } from "react";
const TowerControl = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 13v9m8 0v-9M9 6l1 7m5-7-1 7m-2-7V2m1 0h-2m7.2 10.27L20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73z" /></svg>);
TowerControl.displayName = "TowerControl";
export default TowerControl;