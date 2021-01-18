
import { useEffect } from "react";

/**
 * If user clicks outside of ref element, callback is called
 * @param ref 
 * @param callback 
 */

const useOutsideClick = (ref: any, callback: () => void) => {
  const handleClick = (e:MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;