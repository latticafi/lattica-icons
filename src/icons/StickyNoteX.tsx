import { forwardRef, type SVGProps, type Ref } from "react";
const StickyNoteX = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 3v5a1 1 0 0 0 1 1h5m-5 7 5 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 12V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m9-5-5 5" /></svg>);
StickyNoteX.displayName = "StickyNoteX";
export default StickyNoteX;