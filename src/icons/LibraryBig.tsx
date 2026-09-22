import { forwardRef, type SVGProps, type Ref } from "react";
const LibraryBig = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 3v18m13.4-2.1c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6z" /></svg>);
LibraryBig.displayName = "LibraryBig";
export default LibraryBig;