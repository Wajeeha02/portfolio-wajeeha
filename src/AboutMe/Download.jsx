import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const resumePath = '/resume.pdf';
    const a = document.createElement('a');
    a.href = resumePath;
    a.download = 'resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button className="download" onClick={handleDownload}>DOWNLOAD <span>RESUME</span></button>
  );
};

export default DownloadButton;
