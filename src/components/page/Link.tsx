import { Link as RouterLink } from "react-router-dom";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  to: string;
}

export default function Link({ children, to }: Props) {
  return (
    <RouterLink className="text-primary underline" to={to}>
      {children}
    </RouterLink>
  );
}