import { useEffect, useRef } from "react";

function useResizable(id: string, resizeSelector: string = '.resize-handle') : void {
    const isResizing = useRef<boolean>(false);
    
    const coords = useRef({
        startX: 0,
        startY: 0,
        lastWidth: 0,
        lastHeight: 0,
      });
      
    useEffect(() => {

        const target = document.getElementById(id)
        if (!target) throw new Error("Element with given id doesn't exist.");

        const handle = target.querySelector(resizeSelector) as HTMLElement | null;
        if (!handle) throw new Error("Resize handle not found.");
        if (!(handle instanceof HTMLElement)) {
            throw new Error("Resize handle not found or not an HTML element.");
          }          

        const onMouseDown = (e: MouseEvent) => {
            console.log("resize- on mouse down");
            isResizing.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
            coords.current.lastWidth = target.offsetWidth;
            coords.current.lastHeight = target.offsetHeight;
        };
        
        const onMouseUp = () => {
            isResizing.current = false;
        };
    
        const onMouseMove = (e: MouseEvent) => {
            if (!isResizing.current) return;
            const minWidth = 200;
            const minHeight = 150;
            const newWidth = coords.current.lastWidth + (e.clientX - coords.current.startX);
            const newHeight = coords.current.lastHeight + (e.clientY - coords.current.startY);
            
            target.style.width = `${Math.max(newWidth, minWidth)}px`;
            target.style.height = `${Math.max(newHeight, minHeight)}px`;
        };
    
        handle.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);
    
        const cleanup = () => {
            handle.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
          };

        return cleanup
    
    

    }, [id, resizeSelector]);

    
};

export default useResizable;