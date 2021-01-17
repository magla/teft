import { useContext } from "react";
import { DataContext } from "../../api/DataContext";

export function HTMLContent() {
  const data = useContext(DataContext);
  const { content } = data;

  return <div id="content" className="my-48" dangerouslySetInnerHTML={{ __html: content }} />;
}