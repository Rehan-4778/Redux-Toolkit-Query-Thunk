/* eslint-disable react/prop-types */
import { FaTrashAlt, FaSync } from "react-icons/fa";
import { useDeletePhotoMutation } from "../store";

const PhotosListItem = ({ photo }) => {
  const [deletePhoto, results] = useDeletePhotoMutation();

  const handleDeletePhoto = () => {
    deletePhoto(photo);
  };

  return (
    <div className="relative cursor-pointer" onClick={handleDeletePhoto}>
      <img src={photo.url} alt={photo.url} />
      <div className="absolute inset-0 flex justify-center items-center bg-red-500 opacity-0 hover:opacity-80">
        {results.isLoading ? (
          <FaSync className="animate-spin" />
        ) : (
          <FaTrashAlt className="text-xl" />
        )}
      </div>
    </div>
  );
};

export default PhotosListItem;
