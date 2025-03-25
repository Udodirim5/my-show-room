import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useUpdatePost } from "../../mutationsAndFn/post/useUpdatePost";
import { useCreatePost } from "../../mutationsAndFn/post/useCreatePost";

const BlogPostForm = ({ postToEdit, onCloseModal }) => {
  const { id: editId, ...editValues } = postToEdit || {};
  const isEditMode = Boolean(editId);

  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    defaultValues: isEditMode ? editValues : {}
  });

    const { createPost, isCreatingPost: isCreatingProject } = useCreatePost();
    const { updatePost, isUpdating } = useUpdatePost();
    const isProcessing = isEditMode ? isUpdating : isCreatingProject;
  

  const onSubmit = (data) => {
    const coverImage =
    typeof data.coverImage === "string" ? data.coverImage : data.coverImage?.[0];
    const projectData = { ...data, coverImage };

    if (isEditMode) {
      updatePost(
        { newData: projectData, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createPost(projectData, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  };
  

  return (
    <Modal>
      <FormCard>
        <Header>
          <h3>{isEditMode ? "Edit Post" : "New Post"}</h3>
          <CloseBtn onClick={onCloseModal}>×</CloseBtn>
        </Header>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Label>Post Title</Label>
            <Input 
              {...register("title", { required: "Required" })}
              error={errors.title}
            />
            <Error>{errors.title?.message}</Error>
          </InputGroup>

          <InputGroup>
            <Label>Excerpt</Label>
            <Textarea
              rows={3}
              {...register("excerpt", { required: "Required" })}
              error={errors.excerpt}
            />
            <Error>{errors.excerpt?.message}</Error>
          </InputGroup>

          <InputGroup>
            <Label>Cover Image</Label>
            <FileInput
              type="file"
              accept="image/*"
              {...register("coverImage", { required: !isEditMode && "Required" })}
            />
            <Error>{errors.coverImage?.message}</Error>
          </InputGroup>

          <InputGroup>
            <Label>Content (HTML)</Label>
            <Textarea
              rows={10}
              {...register("content", { required: "Required" })}
              error={errors.content}
            />
            <Error>{errors.content?.message}</Error>
          </InputGroup>

          <Actions>
            <Button disabled={isProcessing} type="submit">
              {isEditMode ? "Update Post" : "Publish Post"}
            </Button>
            <Button type="button" secondary onClick={onCloseModal}>
              Cancel
            </Button>
          </Actions>
        </Form>
      </FormCard>
    </Modal>
  );
};

// Reused styled components with slight modifications
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const FormCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: ${({ theme }) => theme.primary || "#4f46e5"};
  color: white;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem;
  color: white;
  line-height: 1;

  &:hover {
    color: #333;
  }
`;

const Form = styled.form`
  padding: 1.5rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1.25rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textPrimary || "#374151"};
  font-size: 0.9375rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ error }) => error ? '#ff4d4f' : '#d9d9d9'};
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary || "#4f46e5"};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primaryLight || "#a5b4fc"};
    background: white;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ error }) => error ? '#ff4d4f' : '#d9d9d9'};
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.2s;
  font-family: inherit;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

const FileInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px dashed ${({ theme }) => theme.border || "#e5e7eb"};
  border-radius: 8px;
  background: ${({ theme }) => theme.inputBg || "#f9fafb"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.primary || "#4f46e5"};
    background: white;
  }

  &::file-selector-button {
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.primaryLight || "#a5b4fc"};
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.primary || "#4f46e5"};
    font-weight: 600;
    margin-right: 1rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: ${({ theme }) => theme.primary || "#4f46e5"};
      color: white;
    }
  }
`;

const Error = styled.span`
  display: block;
  margin-top: 0.25rem;
  color: #ff4d4f;
  font-size: 0.875rem;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 0.625rem 1.25rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid ${({ secondary }) => secondary ? '#d9d9d9' : 'transparent'};
  background: ${({ secondary }) => secondary ? 'white' : '#1890ff'};
  color: ${({ secondary }) => secondary ? '#333' : 'white'};

  &:hover {
    background: ${({ secondary }) => secondary ? '#f5f5f5' : '#40a9ff'};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default BlogPostForm;