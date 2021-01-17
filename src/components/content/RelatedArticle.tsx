import { Interface } from '../../api';

const LOCALE = 'no-NO';
const DATE_OPTIONS = { day: 'numeric', month: 'long', year: 'numeric' };

interface Props {
  article: Interface.ShortPost;
}
export function RelatedArticle({ article }: Props) {
  const { image, title, created, excerpt } = article;
  const date = new Date(created).toLocaleDateString(LOCALE, DATE_OPTIONS);

  return (
    <article className="flex flex-col">
      {!image && (
        <img src="https://via.placeholder.com/528" alt="placeholder" />
      )}
      {image && <img src={image.url} alt={image.alt} />}
      <h2 className="text-primary mb-0">{title}</h2>
      <div className="text-grey-dark text-xs my-12">{date}</div>
      <p className="text-sm">{excerpt}</p>
    </article>
  );
}
