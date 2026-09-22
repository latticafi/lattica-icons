import { forwardRef, type SVGProps, type Ref } from "react";
const Bone = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 0 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 0 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 0 0 5 0c0-.81-.7-1.8 0-2.5z" /></svg>);
Bone.displayName = "Bone";
export default Bone;