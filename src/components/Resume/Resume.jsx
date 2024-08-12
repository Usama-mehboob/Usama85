import React from "react";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/usama-resume-pdf";
    link.download = "usama-resume-pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <h1>Resume</h1>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
}

export default Resume;
