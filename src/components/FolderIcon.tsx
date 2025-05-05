

type Props = {
    label: string;
    onDoubleClick?: () => void;
    top: number;
    left: number;
  };
  
  
  export default function FolderIcon({ label, onDoubleClick, top, left}: Props) {
    return (
        <>
        <div  onDoubleClick={onDoubleClick}  style={{ 
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            textAlign: 'center',
            cursor: 'pointer',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            }}>
            <img
                    src="/files_icon.png"
                    alt="Folder"
                    style={{ width: '90px', height: '90px', display: 'block', marginTop: '-10px' }}
                    />
                <p style={{ 
                    fontFamily: "'VT323', monospace",
                    color: 'black', 
                    fontSize: '0.8rem', 
                    margin: '0',
                    marginTop: '-15px',
                    marginBottom: '15px'

                    }}>{label}
                </p>
        </div>

        
        </>
    );
  }
  