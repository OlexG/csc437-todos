import { useRef } from 'react';

interface ModalProps {
  headerLabel: string;
  isOpen: boolean;
  onCloseRequested: () => void;
  children: React.ReactNode;
}

function Modal({ headerLabel, isOpen, onCloseRequested, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;
  
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      onCloseRequested();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 bg-gray-500/75 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div 
        ref={dialogRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-md p-4"
      >
        <div className="flex items-center justify-between mb-4 pb-2">
          <h2 className="text-xl font-semibold">{headerLabel}</h2>
          <button 
            onClick={onCloseRequested} 
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal; 