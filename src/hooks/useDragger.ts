import { useEffect, useRef } from 'react';


function useDragger(id: string, dragSelector: string = '.titlebar') : void{
    const isClicked = useRef<boolean>(false);
    
    const coords = useRef<{
        startX: number;
        startY: number;
        lastX: number;
        lastY: number;
    }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0,
    });
    
useEffect(() => {
    const target = document.getElementById(id)
    if (!target) throw new Error("Element with given id doesn't exist.");

    const dragHandle = target.querySelector(dragSelector) as HTMLElement | null;;
    if (!dragHandle) throw new Error(`Drag handle "${dragSelector}" not found inside "${id}"`);


    const onMouseDown = (e: MouseEvent) => {
        isClicked.current = true;
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
    };

    const onMouseUp = () => {
        isClicked.current = false;
        coords.current.lastX = target.offsetLeft;
        coords.current.lastY = target.offsetTop;
    };
    
    const onMouseMove = (e: MouseEvent) => {
        if (!isClicked.current) return;

        const nextX = e.clientX - coords.current.startX + coords.current.lastX ;
        const nextY = e.clientY - coords.current.startY +coords.current.lastY;

        target.style.top = `${nextY}px`;
        target.style.left = `${nextX}px`;
    };

    dragHandle.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);

    const cleanup = () => {
        dragHandle.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      };

    return cleanup;
}, [id, dragSelector]);

}

export default useDragger;