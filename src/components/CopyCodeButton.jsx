import { useState } from 'react';

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
      className="bg-primary px-3 py-1 transition-all hover:scale-105 rounded text-white focus:outline-none"
    >
      {copied ? 'Copied!' : 'Copy Code'}
    </button>
  );
};

export default CopyCodeButton;