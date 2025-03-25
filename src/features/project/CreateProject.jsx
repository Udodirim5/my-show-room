import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import { useUpdateProject } from "../../mutationsAndFn/project/useUpdateProject";
import { useCreateProject } from "../../mutationsAndFn/project/useCreate";

const CreateProject = ({ projectToEdit, onCloseModal }) => {
  const { id: editId, ...editValues } = projectToEdit || {};
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { createProject, isCreating: isCreatingProject } = useCreateProject();
  const { updateProject, isUpdating } = useUpdateProject();
  const isProcessing = isEditSession ? isUpdating : isCreatingProject;

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image?.[0];
    const projectData = { ...data, image };
  
    if (isEditSession) {
      updateProject(
        { newData: projectData, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createProject(projectData, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  };
  
  return (
    <ModalOverlay>
      <FormCard>
        <FormHeader>
          <h2>{isEditSession ? "Edit Project" : "Add New Project"}</h2>
          <CloseButton onClick={onCloseModal}>&times;</CloseButton>
        </FormHeader>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              type="text"
              {...register("title", { required: "Title is required" })}
              error={!!errors.title}
            />
            {errors.title && <Error>{errors.title.message}</Error>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="liveUrl">Live URL</Label>
            <Input
              id="liveUrl"
              type="url"
              placeholder="https://yourproject.com"
              {...register("liveUrl", {
                required: "Live URL is required",
                pattern: {
                  value: /^https?:\/\/.+/,
                  message: "Must start with http:// or https://",
                },
              })}
              error={!!errors.liveUrl}
            />
            {errors.liveUrl && <Error>{errors.liveUrl.message}</Error>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="gitHubUrl">GitHub URL</Label>
            <Input
              id="gitHubUrl"
              type="url"
              placeholder="https://github.com/your-repo"
              {...register("gitHubUrl", {
                required: "GitHub URL is required",
                pattern: {
                  value: /^https?:\/\/.+/,
                  message: "Must start with http:// or https://",
                },
              })}
              error={!!errors.gitHubUrl}
            />
            {errors.gitHubUrl && <Error>{errors.gitHubUrl.message}</Error>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="image">Project Image</Label>
            <ImageInput
              type="file"
              id="image"
              accept="image/*"
              {...register("image", {
                required: isEditSession ? false : "Image is required",
              })}
            />
            {errors.image && <Error>{errors.image.message}</Error>}
          </FormGroup>

          <ButtonGroup>
            <PrimaryButton type="submit" disabled={isProcessing}>
              {isProcessing ? (
                <Spinner />
              ) : isEditSession ? (
                "Update Project"
              ) : (
                "Create Project"
              )}
            </PrimaryButton>
            <SecondaryButton
              type="button"
              onClick={onCloseModal}
              disabled={isProcessing}
            >
              Cancel
            </SecondaryButton>
          </ButtonGroup>
        </Form>
      </FormCard>
    </ModalOverlay>
  );
};

export default CreateProject;

// Styled Components
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const ModalOverlay = styled.div`
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
  animation: ${fadeIn} 0.3s ease-out;
`;

const FormCard = styled.div`
  background: ${({ theme }) => theme.cardBg || "#ffffff"};
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  overflow: hidden;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.primary || "#4f46e5"};
  color: white;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.25rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Form = styled.form`
  padding: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
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
  padding: 0.875rem 1rem;
  border: 2px solid
    ${({ theme, error }) =>
      error ? theme.error || "#ef4444" : theme.border || "#e5e7eb"};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  background: ${({ theme }) => theme.inputBg || "#f9fafb"};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary || "#4f46e5"};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primaryLight || "#a5b4fc"};
    background: white;
  }

  &::placeholder {
    color: ${({ theme }) => theme.placeholder || "#9ca3af"};
  }
`;

const ImageInput = styled.input`
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
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.error || "#ef4444"};
  font-size: 0.875rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: flex-end;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const BaseButton = styled.button`
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.primary || "#4f46e5"};
  color: white;
  border: none;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.primaryDark || "#4338ca"};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: white;
  color: ${({ theme }) => theme.primary || "#4f46e5"};
  border: 2px solid ${({ theme }) => theme.primary || "#4f46e5"};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.primaryLight || "#eef2ff"};
    transform: translateY(-2px);
  }
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: ${spin} 1s ease-in-out infinite;
  margin-right: 8px;
`;
