import React, { useState, ChangeEvent, ReactNode } from 'react';
import axios from 'axios';
import { Card5 } from '../../../../../_metronic/partials/content/cards/Card5';

import "../css/UploadAssets.css"
import { KTIcon } from '../../../../../_metronic/helpers';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [responseData, setResponseData] = useState<Record<string, unknown>>({});
  const [uploadedImageUrl, setUploadedImageUrl] = useState(''); // to store the URL of the uploaded image
  const [imageName, setImageName] = useState<string>(''); // to display the name of the image which has been selected
  const [image, setImage] = useState<string | ArrayBuffer | null>(null); //  to preview the selected image

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImage(URL.createObjectURL(file));
      setImageName(file.name);
    }
  }

  const removeUpload = () => {
    setImage('');
    setImageName('');
  };

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
        <div className="file-upload">
          {image ? (
            <div className="file-upload-content">
              <img className="file-upload-image" src={image as string} alt="preview" />
              <div className="image-title-wrap">
                <button type="button" className="remove-image" onClick={removeUpload}>Remove <span className="image-title">{imageName}</span></button>
              </div>
            </div>
          ) : (
            <div className="image-upload-wrap">
              <input className="file-upload-input" type='file' accept="image/*" onChange={onFileChange} />
              <div className="drag-text">
                <div>
                  <KTIcon iconName='picture' className='upload-icon-logo text-primary' />
                  <h3>Drag and drop a file or select add Image</h3>
                </div>
              </div>
            </div>
          )}
          <button className="file-upload-btn mt-7" type="button" onClick={onFileUpload}>Upload</button>
        </div>
        <p>Status: {uploadStatus}</p>
        <div>
          {uploadedImageUrl && (
            <div>
              <h3>Uploaded Image:</h3>
              <img src={uploadedImageUrl} alt="Uploaded content" width="600" height="600" />
            </div>
          )}

        </div>
        <div>
          <h3>Image Metadata</h3>
        </div>
        <table>

          <tbody>
            {Object.entries(responseData).map(([key, value], index) => (
              <tr key={index + 1}>
                <td>{value as ReactNode}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Display the uploaded image */}
        <div className='d-flex flex-wrap flex-stack mb-6 mt-7'>
          <h3 className='fw-bolder my-2'>
            Add metadata
          </h3>
        </div>
        <div className='row g-6 g-xl-9'>
          <div className='col-sm-6 col-xl-4'>
            <Card5
              icons='pencil'
              title='Activity Metadata'
              description='$500.00'
              status='down'
              statusValue={40.5}
              statusDesc='more impressions'
              progress={0.5}
              progressType='MRR'
              options={[{ label: 'Golf', value: 'Golf' }, { label: 'Awards', value: 'Awards' }]}
            />
          </div>
          <div className='col-sm-6 col-xl-4'>
            <Card5
              icons='user'
              title='People Metadata'
              description='807k'
              status='up'
              statusValue={17.62}
              statusDesc='Followers growth'
              progress={5}
              progressType='New trials'
              options={[{ label: 'Amin H. Nassar', value: 'Amin H. Nassar' }, { label: ' Emily Kristine Pedersen', value: ' Emily Kristine Pedersen' }]}
            />
          </div>
          <div className='col-sm-6 col-xl-4'>
            <Card5
              icons='geolocation'
              title='Location Metadata'
              description='1,073'
              status='down'
              statusValue={10.45}
              statusDesc='Less comments than usual'
              progress={40}
              progressType='Impressions'
              options={[{ label: 'Riyadh', value: 'Riyadh' }, { label: 'Saudi Arabia', value: 'Saudi Arabia' }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
