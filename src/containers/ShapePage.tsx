import { useContext } from 'react';
import { DataContext } from '../api';
import { Breadcrumbs } from '../components/navigation';
import {
  Author,
  RelatedArticles,
  CTASection,
  HTMLContent,
  Excerpt
} from '../components/content';

export function ShapePage() {
  const data = useContext(DataContext);
  const { title } = data;

  return (
    <>
      <Breadcrumbs />
      <article>
        <header>
          <h1>{title}</h1>
          <Excerpt />
        </header>
        <div className="center-content">
          <Author />
          <HTMLContent />
        </div>
        <RelatedArticles />
        <div className="center-content">
          <CTASection />
        </div>
      </article>
    </>
  );
}
