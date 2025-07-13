import React from "react";

const DownloadQuestion = ({ filteredQuestions }) => {
  const createAndDownloadBlob = () => {
    const textData = JSON.stringify(filteredQuestions, null, 2);
    const blob = new Blob([textData], { type: "application/json" });

    // Create a temporary URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = "questioons.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Revoke the object URL to free up memory
    URL.revokeObjectURL(url);
    console.log(filteredQuestions);
  };
  return (
    <div>
      <button
        onClick={createAndDownloadBlob}
        className="bg-copper font-alfa text-pastelPink px-[20px] py-[15px] rounded-lg hover:text-white hover:scale-110 "
      >
        Download Question
      </button>
    </div>
  );
};

export default DownloadQuestion;
