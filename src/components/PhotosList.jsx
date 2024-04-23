/* eslint-disable react/prop-types */
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";

const PhotosList = ({ album }) => {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={5} />;
  } else if (error) {
    content = <div>Error fetching photos...</div>;
  } else {
    content = data.map((photo) => (
      <PhotosListItem key={photo.id} photo={photo} />
    ));
  }

  return (
    <div className="mx-auto my-2">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">PhotosList</div>
        <Button secondary loading={results.isLoading} onClick={handleAddPhoto}>
          Add Photo
        </Button>
      </div>
      <div className="my-2 text-red-600 font-semibold">{results.isError}</div>
      <div className="my-3 grid grid-cols-5 gap-2 ">{content}</div>
    </div>
  );
};

export default PhotosList;
