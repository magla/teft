import { useContext } from 'react';
import { DataContext } from '../api/DataContext';
import { Author, RelatedArticles, CTASection, HTMLContent } from '../components/content';
import { Excerpt } from '../components/content/Excerpt';

interface Props {
  color: string;
}

export function CirclePage({ color }: Props) {
  const data = useContext(DataContext);
  const { title } = data;

  return (
    <article>
      <header>
        <h1>{title}</h1>
        <Excerpt />
      </header>
      <div className="lg:mx-auto max-w-content">
        <Author />
        <HTMLContent />
        <RelatedArticles />
        <CTASection />
      </div>
    </article>
  );
}