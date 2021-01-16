interface Props {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function ClickableIcon({ children, onClick, className }: Props) {
  return (
    <button onClick={onClick} className={`flex justify-center align-center p-4 focus:outline-none ${className}`}>
      {children}
    </button>
  );
}