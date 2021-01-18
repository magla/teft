import { useContext } from 'react';
import { DataContext } from '../../api';

export function Excerpt() {
  const data = useContext(DataContext);
  const { excerpt } = data;

  return (
    <p className="italic font-normal text-lg-mobile text-center my-48 lg:px-12 lg:text-lg ">
      {excerpt}
    </p>
  );
}
