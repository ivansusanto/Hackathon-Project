import React, { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

function Uploader() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No selected file');

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files[0]) {
      setFileName(files[0].name);
      setImage(URL.createObjectURL(files[0]));
    }
  };

  const handleDeleteImage = () => {
    setFileName('No selected File');
    setImage(null);
  };

  return (
    <main className="text-center">
      <form
        className="flex flex-col justify-center items-center border-2 border-dashed border-blue-500 h-72 w-80 cursor-pointer rounded-md"
        onClick={() => document.querySelector('.input-field').click()}
      >
        <input
          type="file"
          accept="image/*"
          className="input-field hidden"
          onChange={handleFileChange}
        />

        {image ? (
          <img src={image} width={150} height={150} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload className="text-blue-500 text-5xl" />
            <p>Browse Files to upload</p>
          </>
        )}
      </form>

      <section className="uploaded-row bg-blue-100 rounded-md mt-4 p-4 flex justify-between items-center">
        <AiFillFileImage className="text-blue-500 text-2xl" />
        <span className="upload-content">
          {fileName} -
          <MdDelete onClick={handleDeleteImage} className="text-blue-500 cursor-pointer" />
        </span>
      </section>
    </main>
  );
}

export default Uploader;
