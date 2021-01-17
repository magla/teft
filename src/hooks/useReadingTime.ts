import { useContext } from 'react';
import { DataContext } from '../api/DataContext';
import useWordCount from './useWordCount';

export default function useReadingTime() {
  const data = useContext(DataContext);
  const { content } = data;

  // const textualContent = content.filter(content => content.type === Types.Intro || Types.Section);

  // const words = useWordCount(htmlContent.join(''));
  // const minutes = Math.ceil(words / 200);

  return `min read`;
};