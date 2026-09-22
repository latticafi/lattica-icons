import { forwardRef, type SVGProps, type Ref } from "react";
const MapPinned = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.607 16.795C14.131 15.429 18 11.613 18 8A6 6 0 1 0 6 8c0 3.613 3.87 7.429 5.393 8.795a1 1 0 0 0 1.214 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-3.286 4h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" /></svg>);
MapPinned.displayName = "MapPinned";
export default MapPinned;