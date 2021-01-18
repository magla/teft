import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../api';
import { useReadingTime } from '../../hooks';
import { SocialSection } from '../page';

const DATE_OPTIONS = { day: 'numeric', month: 'long' };

export function Author() {
  const data = useContext(DataContext);

  const { author, created } = data;
  const {
    name,
    link,
    meta: { title, company, avatar, twitterUrl, facebookUrl, instagramUrl },
  } = author;

  const date = new Date(created).toLocaleDateString(process.env.REACT_APP_LOCALE, DATE_OPTIONS);
  const readingTime = useReadingTime(data.content);
  const authorInfo = `${title} ${company} – ${readingTime} – ${date}`;

  return (
    <div className="hidden lg:flex space-x-16 my-48">
      <img
        alt="Author"
        src={avatar}
        className="flex-none object-contain w-88 h-88"
      />
      <div className="flex-grow flex flex-col">
        <Link to={link} className="text-base text-primary mb-8">{name}</Link>
        <span className="text-xs mb-16">{authorInfo}</span>
        <SocialSection
          facebookUrl={facebookUrl}
          twitterUrl={twitterUrl}
          instagramUrl={instagramUrl}
        />
      </div>
    </div>
  );
}
