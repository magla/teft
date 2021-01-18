import { useContext } from 'react';
import { DataContext } from '../../api';
export function HTMLContent() {
  const data = useContext(DataContext);
  const { content } = data;

  return (
    <div
      id="content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
