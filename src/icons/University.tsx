import { forwardRef, type SVGProps, type Ref } from "react";
const University = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 21v-3a2 2 0 0 0-4 0v3m8-9h.01M18 16h.01" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 12h.01M6 16h.01M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359l-4.714-3.28a2 2 0 0 0-2.286-.002L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
University.displayName = "University";
export default University;