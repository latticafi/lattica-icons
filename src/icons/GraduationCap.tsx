import { forwardRef, type SVGProps, type Ref } from "react";
const GraduationCap = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 10v6m-.58-5.078a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 12.5V16c0 .796.632 1.559 1.757 2.121S10.41 19 12 19s3.117-.316 4.243-.879C17.368 17.56 18 16.796 18 16v-3.5" /></svg>);
GraduationCap.displayName = "GraduationCap";
export default GraduationCap;