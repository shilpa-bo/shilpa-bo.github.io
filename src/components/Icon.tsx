type Props = {
    label: string;
    iconSrc: string;
  };
  
  export default function FolderIcon({ label, iconSrc }: Props) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80px',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        <img
          src={iconSrc}
          alt={label}
          style={{
            width: '64px',
            height: '64px',
            objectFit: 'contain',
            marginBottom: '4px',
          }}
        />
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: '0.8rem',
            color: 'black',
            margin: 0,
          }}
        >
          {label}
        </p>
      </div>
    );
  }
  