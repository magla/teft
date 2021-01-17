import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

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
        <TwitterIcon fontSize="small" />
      </Link>
      <Link to={facebookUrl}>
        <InstagramIcon fontSize="small" />
      </Link>
      <Link to={instagramUrl}>
        <FacebookIcon fontSize="small" />
      </Link>
    </div>
  );
}
