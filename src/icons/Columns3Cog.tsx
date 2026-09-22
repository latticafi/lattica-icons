import { forwardRef, type SVGProps, type Ref } from "react";
const Columns3Cog = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.6 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.6m-6.695 8.93.923-.382M15 3v7.6m.229 6.252-.924-.383m2.547-1.241-.383-.923m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924m1.625-3.92.922-.383m-.922 2.679.922.383M9 3v18" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
Columns3Cog.displayName = "Columns3Cog";
export default Columns3Cog;