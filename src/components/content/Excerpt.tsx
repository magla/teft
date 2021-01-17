import { useContext } from 'react';
import { DataContext } from '../../api';

export function Excerpt() {
  const data = useContext(DataContext);
  const { excerpt } = data;

  return (
    <p className="italic text-lg-mobile lg:text-lg text-center my-48 px-12">
      {excerpt}
    </p>
  );
}
