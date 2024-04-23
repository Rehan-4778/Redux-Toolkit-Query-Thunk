/* eslint-disable react/prop-types */
import Button from "./Button";
import { FaTrashAlt } from "react-icons/fa";
import ExpandablePanel from "./ExpandablePanel";
import { useDeleteAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

const AlbumsListItem = ({ album }) => {
  const [deleteAlbum, results] = useDeleteAlbumMutation();

  const handleDeleteAlbum = () => {
    deleteAlbum(album);
  };

  const header = (
    <>
      <Button
        danger
        icons
        loading={results.isLoading}
        onClick={handleDeleteAlbum}
      >
        <FaTrashAlt size={14} />
      </Button>
      <div>{results.isError ? "Error deleting album..." : album.title}</div>
    </>
  );
  return (
    <div>
      <ExpandablePanel header={header}>
        <PhotosList album={album} />
      </ExpandablePanel>
    </div>
  );
};

export default AlbumsListItem;
