/** @jsxImportSource react */
interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({ label, type = "button", onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        width: "100%",
        padding: "0.75rem",
        backgroundColor: "#3b82f6",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontSize: "1rem",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}
