import React, { useState, ChangeEvent, ReactNode } from 'react';
import axios from 'axios';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [responseData, setResponseData] = useState<Record<string, unknown>>({});
  const [uploadedImageUrl, setUploadedImageUrl] = useState(''); // to store the URL of the uploaded image

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  }

  const onFileUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://localhost:8080/assets/uploadAsset", formData);
      setResponseData(response.data as Record<string, unknown>);
      setUploadStatus('File Uploaded Successfully');
      // Set the uploadedImageUrl state with the URL of the uploaded image.
      // Replace 'url' with the correct property name from your response data.
      if (response.data[0]) {
        setUploadedImageUrl(response.data[0] as string);
      }
    } catch (error) {
      console.log(error);
      setUploadStatus('File Upload Failed');
    }
  };

  return (
    <div>
      <h3>Upload a File</h3>
      <div>
        <input type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>
          Upload!
        </button>
        <p>Status: {uploadStatus}</p>
        <div>
        {uploadedImageUrl && (
          <div>
            <h3>Uploaded Image:</h3>
            <img src={uploadedImageUrl} alt="Uploaded content" width="600" height="600"/>
          </div>
        )}
            
        </div>
        <div>
        <h3>Image Metadata</h3>

        </div>
        <table>
            
          <tbody>
            {Object.entries(responseData).map(([key, value], index) => (
              <tr key={index+1}>
                
                <td>{value as ReactNode}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Display the uploaded image */}
       
      </div>
    </div>
  );
}

export default UploadPage;
