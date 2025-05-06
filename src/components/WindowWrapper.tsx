import React from 'react';
import './WindowWrapper.css'; // or wherever your styles are
import useDragger from '../hooks/useDragger';
import useResizable from '../hooks/useResizable';

type Props = {
  id: string;
  title: string;
  onClose: () => void;
  onMinimize: () => void;
  children: React.ReactNode;
};

export default function WindowWrapper({ id, title, onClose, onMinimize, children }: Props) {
    useDragger(id);
    useResizable(id);
  return (
    <div id={id} className="mini-window">
      <div className="titlebar">
        <span>{title}</span>
        <span className="window-controls">
            <button className='minimize' onClick={onMinimize}><span className="symbol">–</span></button> 
            <button className='close' onClick={onClose}><span className="symbol">x</span></button>
        </span>
      </div>

      <div className="window-content">
        {children}
      </div>

      <div className="resize-handle"/>
    </div>
  );
}
