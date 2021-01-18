import { useState, useRef, useEffect } from 'react';
import { Search as SearchIcon, Close } from '../../assets/images';
import { ClickableIcon } from './ClickableIcon';

interface Props {
  onToggle: (open: boolean) => void;
}

export function Search({ onToggle }: Props) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

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
  };

  const handleSearchClick = () => {
    if (!open) {
      setOpen(true);
      return;
    }

    // Implement search function
    // search();
  };

  return (
    <div className="relative flex-grow flex items-center">
      <div
        className={`bg-white flex-grow flex py-4 px-12 ring-inset rounded-lg ring-2 ${
          !open && 'hidden'
        }`}
      >
        <input
          type="text"
          ref={inputRef}
          className="flex-grow focus:outline-none"
        />
        {open && (
          <ClickableIcon onClick={handleCloseClick}>
            <Close fontSize="small" />
          </ClickableIcon>
        )}
      </div>
      <ClickableIcon onClick={handleSearchClick}>
        {!open && <span className="hide-on-mobile mr-8">Search</span>}
        <SearchIcon fill="black"/>
      </ClickableIcon>
    </div>
  );
}
