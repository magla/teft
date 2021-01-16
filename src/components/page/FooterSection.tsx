interface Props {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
}

export default function FooterSection({ children, className }: Props) {
  return (
    <div className={`flex flex-col space-y-24 text-sm ${className}`}>
     {children}
    </div>
  );
}