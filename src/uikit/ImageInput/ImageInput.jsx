import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAvatar } from '../../redux/auth/authOperations';
import { getLoading } from '../../redux/auth/authSelectors';
import Spinner from '../../components/common/Spinner/Spinner';
import s from './ImageInput.module.css';

const MAX_FILE_SIZE = process.env.REACT_APP_MAX_FILE_SIZE;

const ImageInput = ({ savedImage }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const loading = useSelector(getLoading);

  const handleFileChange = e => {
    const selectedFile = e.target.files[0];
    if (!validateFileSize(selectedFile)) {
      toast.error('File size exceeds 5 MB limit.');
      return;
    }
    setFile(selectedFile);
    if (selectedFile) {
      toast.info(`Selected file: ${selectedFile.name}`);
    }
  };

  const validateFileSize = file => {
    if (file && file.size > MAX_FILE_SIZE) {
      return false;
    }
    return true;
  };

  const handleUpload = () => {
    if (!file) {
      toast.warning('Please select a file.');
      return;
    }
    dispatch(updateUserAvatar(file));
  };

  return (
    <div className={s.container}>
      <label className={s.label}>
        <img className={s.img} src={savedImage} alt="Avatar" />
        <input
          className={s.fileInput}
          type="file"
          name="file"
          accept="image/jpeg, image/png, image/gif"
          onChange={handleFileChange}
        />
      </label>
      <button className={s.button} onClick={handleUpload}>
        {loading ? <Spinner color="#fff" size="10px" /> : 'submit'}
      </button>
    </div>
  );
};

export default ImageInput;
