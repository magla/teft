import useWordCount from './useWordCount';

/**
 * Get information on how much it takes to read the document,
 * based on content length (200 words a minute is average)
 * @param content
 */
export default function useReadingTime(content: string) {
  const words = useWordCount(content);
  const minutes = Math.ceil(words / 200);

  return `${minutes} min read`;
}
