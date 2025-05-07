type Props = {
    label: string;
    onDoubleClick?: () => void;
    top: number;
    left: number;
  };
  
  export default function FolderIcon({ label, onDoubleClick, top, left }: Props) {
    return (
        <>
        
        <div onDoubleClick={onDoubleClick}  style={{ 
            textAlign: 'center',
            cursor: 'pointer',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`
            }}>
            <img
                    src="/notepad_icon.png"
                    alt="folder"
                    style={{ width: '45px', height: '45px', display: 'block', marginTop: '10px',marginBottom: '5px' }}
                    />
                <p style={{ 
                    fontFamily: "'VT323', monospace",
                    color: 'black', 
                    fontSize: '0.8rem', 
                    backgroundColor: '#EEF44D',
                    margin: '0',
                    marginTop: '1px',
                    marginBottom: '10px'
                    }}>{label}
                </p>
        </div>
        
        
        </>
    );
  }
  