import React from "react";
import "./WindowWrapper.css";

type Props = {
    title: string;
    onClose: () => void;
    children: React.ReactNode;
};

export default function WindowWrapper({ title, onClose, children }: Props) {
    return (
        <div className="mini-window">
            <div className="window-header">
                <span className="window-title">{title}</span>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
            </div>
            <div className="window-content">{children}</div>
        </div>
    );
}