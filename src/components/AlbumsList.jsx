/* eslint-disable react/prop-types */
import { useFetchAlbumsQuery, useAddAblumMutation } from "../store";
import AlbumsListItem from "./AlbumsListItem";
import Button from "./Button";
import Skeleton from "./Skeleton";

const AlbumsList = ({ user }) => {
  const { data, isFetching, error } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAblumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={2} />;
  } else if (error) {
    content = <div>Error fetching albums...</div>;
  } else {
    content = data.map((album) => (
      <AlbumsListItem key={album.id} album={album} />
    ));
  }

  return (
    <div className="mx-auto my-2">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">AlbumsList</div>
        <Button secondary loading={results.isLoading} onClick={handleAddAlbum}>
          Add Album
        </Button>
      </div>
      <div className="my-2 text-red-600 font-semibold">{results.isError}</div>
      <div className="my-3">{content}</div>
    </div>
  );
};

export default AlbumsList;
