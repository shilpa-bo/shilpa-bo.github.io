type Props = {
    label: string;
    onDoubleClick?: () => void
  };
  
  export default function ImageIcon({ label, onDoubleClick }: Props) {
    return (
        <>
        
        <div 
        onDoubleClick={onDoubleClick}
        style={{ 
            textAlign: 'center',
            cursor: 'pointer',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            
            }}>
            <img
                    src="/image_icon.png"
                    alt="folder"
                    style={{ width: '45px', height: '45px', display: 'block', marginTop: '10px',marginBottom: '5px' }}
                    />
                <p style={{ 
                    fontFamily: "'VT323', monospace",
                    color: 'black', 
                    fontSize: '0.8rem', 
                    margin: '0',
                    marginTop: '1px',
                    marginBottom: '10px'
                    }}>{label}
                </p>
        </div>
        
        
        </>
    );
  }
  