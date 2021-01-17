import { useContext } from 'react';
import { DataContext } from '../../api';
import { useReadingTime } from '../../hooks';
import { SocialSection } from '../page';

const DATE_OPTIONS = { day: 'numeric', month: 'long' };

export function Author() {
  const data = useContext(DataContext);

  const { author, created } = data;
  const {
    name,
    meta: { title, company, avatar, twitterUrl, facebookUrl, instagramUrl },
  } = author;

  const date = new Date(created).toLocaleDateString(process.env.LOCALE, DATE_OPTIONS);
  const readingTime = useReadingTime();
  const authorInfo = `${title} ${company} – ${readingTime} – ${date}`;

  return (
    <div className="hidden lg:flex space-x-16 my-48">
      <img
        alt="Author"
        src={`/images/${avatar}`}
        className="flex-none object-contain w-88 h-88"
      />
      <div className="flex-grow flex flex-col space-y-8">
        <span className="text-base text-primary">{name}</span>
        <span className="text-xs">{authorInfo}</span>
        <SocialSection
          facebookUrl={facebookUrl}
          twitterUrl={twitterUrl}
          instagramUrl={instagramUrl}
        />
      </div>
    </div>
  );
}
