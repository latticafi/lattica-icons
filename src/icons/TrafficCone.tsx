import { forwardRef, type SVGProps, type Ref } from "react";
const TrafficCone = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.05 10.966c-.464.32-1.072.58-1.776.76A9.3 9.3 0 0 1 12 12c-.79 0-1.57-.094-2.274-.274s-1.312-.44-1.776-.76m8.973 3.083 4.48 2.04a1 1 0 0 1 .001 1.83l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.949 14.14c.101.354.049.716-.154 1.06-.202.343-.55.66-1.02.931-.469.27-1.049.487-1.7.636a9.4 9.4 0 0 1-2.076.226 9.4 9.4 0 0 1-2.076-.226c-.651-.149-1.231-.366-1.7-.636-.47-.27-.818-.588-1.02-.932a1.32 1.32 0 0 1-.154-1.059L10.063 3.5a2 2 0 0 1 3.874 0z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.194 6.57c.828.28 1.805.43 2.805.43s1.977-.15 2.805-.43" /></svg>);
TrafficCone.displayName = "TrafficCone";
export default TrafficCone;