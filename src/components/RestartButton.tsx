import { useRef } from "react";
import { MdRefresh } from "react-icons/md";

const RestartButton = ({
  onRestart: handleRestart,
  className = "",
}: {
  onRestart: () => void;
  className?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    console.log('=== restart button ===');
    buttonRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      tabIndex={-1} // to prevent focus
      ref={buttonRef}
      className={`block rounded px-8 py-2 ${className}`}
      onClick={handleClick}
    >
      <MdRefresh className="w-6 h-6" />
    </button>
  );
};

export default RestartButton;