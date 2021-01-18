import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram } from '../../assets/images';

interface Props {
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
}

export function SocialSection({
  facebookUrl,
  twitterUrl,
  instagramUrl,
}: Props) {
  return (
    <div className="flex space-x-24 text-primary">
      <Link to={twitterUrl}>
        <Twitter fontSize="small" />
      </Link>
      <Link to={facebookUrl}>
        <Instagram fontSize="small" />
      </Link>
      <Link to={instagramUrl}>
        <Facebook fontSize="small" />
      </Link>
    </div>
  );
}
