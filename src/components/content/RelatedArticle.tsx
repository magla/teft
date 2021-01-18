import { Interface } from '../../api';

const DATE_OPTIONS = { day: 'numeric', month: 'long', year: 'numeric' };

interface Props {
  article: Interface.ShortPost;
}
export function RelatedArticle({ article }: Props) {
  const { image, title, created, excerpt, link } = article;
  const date = new Date(created).toLocaleDateString(process.env.REACT_APP_LOCALE, DATE_OPTIONS);

  return (
    <article className="flex flex-col">
      {!image && (
        <img src="https://via.placeholder.com/528" alt="placeholder" />
      )}
      {image && <img src={image.url} alt={image.alt} />}
      <a className="link" href={link}>
        <h2 className="mb-0">{title}</h2>
      </a>
      <div className="text-grey-dark text-xs my-12">{date}</div>
      <p className="text-sm">{excerpt}</p>
    </article>
  );
}
