import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import BlogPostForm from "./BlogPostEditor";

const AddPost = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal(true)}>Add new post</Button>
      {isOpenModal && (
        <Modal>
          <BlogPostForm
            postToEdit={{}}
            onCloseModal={() => setIsOpenModal(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default AddPost;
