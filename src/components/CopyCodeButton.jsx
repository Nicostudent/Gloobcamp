import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const CopyCodeButton = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed: ', err);
    }
  };

  return (
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 ease-in-out dark:text-white dark:hover:text-gray-300 focus:outline-none"
      >
        {copied ? (
          <span className="text-xs text-green-500">Copied!</span>
        ) : (
          <FaCopy size={18} />
        )}
      </button>
  );
};

export default CopyCodeButton;
