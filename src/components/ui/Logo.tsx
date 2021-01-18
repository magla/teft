import { Link } from 'react-router-dom';
import { ReactComponent as TeftLogo } from '../../assets/images/Logo.svg';

export function Logo() {
  return (
    <Link to="/">
      <TeftLogo />
    </Link>
  );
}
