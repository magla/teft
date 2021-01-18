import { useContext } from 'react';
import { DataContext } from '../../api';
import { Slider } from '../ui';
import { RelatedArticle } from './RelatedArticle';
export function RelatedArticles() {
  const data = useContext(DataContext);
  const { related } = data;

  return (
    <Slider>
      {related.map((article) => (
        <RelatedArticle key={article.id} article={article} />
      ))}
    </Slider>
  );
}
