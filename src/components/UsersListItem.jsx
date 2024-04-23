/* eslint-disable react/prop-types */
import Button from "../components/Button";
import { FaTrashAlt } from "react-icons/fa";
import { deleteUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import { useDispatchThunk } from "../hooks/use-dispatch-thunk";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ item }) => {
  const [doDeleteUser, isLoading, error] = useDispatchThunk(deleteUser);

  const handleDeleteUser = () => {
    doDeleteUser(item);
  };

  const header = (
    <>
      <Button danger icons loading={isLoading} onClick={handleDeleteUser}>
        <FaTrashAlt size={14} />
      </Button>
      <div>{error ? "Error deleting user..." : item.name}</div>
    </>
  );

  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumsList user={item} />
      </ExpandablePanel>
    </div>
  );
};

export default UsersListItem;
