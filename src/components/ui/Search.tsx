import { useState, useRef, useEffect } from 'react';
import { Search as SearchIcon, Close } from '../../assets/images';
import { useOutsideClick } from '../../hooks';
import { ClickableIcon } from './ClickableIcon';

interface Props {
  onToggle: (open: boolean) => void;
}

export function Search({ onToggle }: Props) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(searchRef, () => {
    setOpen(false);
  });
  
  useEffect(() => {
    if (onToggle) {
      onToggle(open);
    }
  }, [open, onToggle]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open, inputRef]);

  const handleCloseClick = () => {
    setOpen(!open);
    
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleSearchClick = () => {
    if (!open) {
      setOpen(true);
      return;
    }

    // TODO: Implement search function
    // search();
  };

  return (
    <div ref={searchRef} className="relative flex-grow flex items-center justify-end">
      <div
        className={`bg-white flex-grow flex py-4 px-12 ${
          !open && 'hidden'
        }`}
      >
        <input
          type="text"
          ref={inputRef}
          className="flex-grow focus:outline-none"
        />
        <ClickableIcon onClick={handleCloseClick}>
          <Close fontSize="small" />
        </ClickableIcon>
      </div>
      <ClickableIcon onClick={handleSearchClick}>
        {!open && <span className="hide-on-mobile mr-8">Search</span>}
        <SearchIcon fill="black"/>
      </ClickableIcon>
    </div>
  );
}
