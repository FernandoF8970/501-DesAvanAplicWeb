  /** @jsxImportSource react */
interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export default function InputField({ type, placeholder, value, onChange }: InputFieldProps) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 border rounded w-full mb-4"
      />
    );
  }
  