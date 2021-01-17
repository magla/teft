/**
 * Gets word count in an html string
 * @param htmls string[]
 */
export default function useWordCount(html: string) {
  return html.replace( /(<([^>]+)>)/ig, '').split(' ').length;
};