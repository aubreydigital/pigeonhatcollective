'use client'
import { useState } from "react";

const UploadImage = ({ onImageUpload, setImageFile }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    console.log(event.target.files[0])
    setImageFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("imageUp", selectedImage);

      try {
        const response = await fetch(
          "https://aubrey.digital/vms_server/server/photoupload.php",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.status === 200) {
          alert("Upload successful.");
          onImageUpload(response.url); // Pass the uploaded image URL to the parent component
        } else {
          alert("File not uploaded.");
        }
      } catch (error) {
        console.log(error);
        alert("An error occurred while uploading the image.");
      }
    }
  };

  return (
    <div className="text-center w-full items-center flex flex-col">
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width="250px"
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
      <input
        type="file"
        name="imageUp"
        onChange={handleImageChange}
      />
      <br />
      <button className="outline rounded-full p-3" style={{ backgroundColor: 'rgba(100, 100, 100, 0.6'}} onClick={handleImageUpload}>Upload Image</button>
    </div>
  );
};

export default UploadImage;