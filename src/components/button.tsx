type ButtonProps = {
    text: string;
    onClick?: () => void; // Agregamos una función opcional para manejar clics
  };
  
  export function Button({ text, onClick }: ButtonProps) {
    return (
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  