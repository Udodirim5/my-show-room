import styled from "styled-components";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import FileInput from "../../ui/FileInput";
import Input from "../../ui/Input";
import { useUpdateProject } from "../../mutationsAndFn/project/useUpdateProject";
import { useCreateProject } from "../../mutationsAndFn/project/useCreate";
import { useForm } from "react-hook-form";

const CreateProject = ({ projectToEdit, onCloseModal }) => {
  const { id: editId, ...editValues } = projectToEdit || {};

  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { isCreatingProject, createProject } = useCreateProject();
  const { updateProject, isUpdating } = useUpdateProject();
  const { errors } = formState;

  const handleSubmitFn = (data) => {

    if (!data) {
      return;
    }
    const image =
      typeof data.image === "string" ? data.image : data.image?.[0] || null;

    if (isEditSession) {
      updateProject(
        { newData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createProject(
        { ...data, image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  };

  const isProcessing = isEditSession ? isUpdating : isCreatingProject;

  const onErrorFn = (error) => {
    console.log(error);
  };

  return (
    <div>
      <CreateProjectForm onSubmit={handleSubmit(handleSubmitFn, onErrorFn)}>
        <FormRow
          label="Project's title"
          htmlFor="title"
          errors={errors?.title?.message}
        >
          <Input
            type="text"
            id="title"
            disabled={isProcessing}
            {...register("title", { required: "Project's title is required" })}
          />
        </FormRow>

        <FormRow
          label="Live URL"
          htmlFor="liveUrl"
          errors={errors?.liveUrl?.message}
        >
          <Input
            type="url"
            id="liveUrl"
            disabled={isProcessing}
            {...register("liveUrl", {
              required: "Project's live URL is required",
            })}
          />
        </FormRow>

        <FormRow
          label="GitHub URL"
          htmlFor="gitHubUrl"
          errors={errors?.gitHubUrl?.message}
        >
          <Input
            type="url"
            id="gitHubUrl"
            disabled={isProcessing}
            {...register("gitHubUrl", { required: " GitHub URL is required" })}
          />
        </FormRow>

        <FormRow
          label="Project photo"
          htmlFor="image"
          errors={errors?.image?.message}
        >
          <FileInput
            disabled={isProcessing}
            id="image"
            accept="image/*"
            {...register("image", {
              required: isEditSession ? false : "Image is required",
            })}
          />
        </FormRow>

        <Flex>
          <Button
            disabled={isProcessing}
            backgroundColor="#10041c"
            type="submit"
          >
            {isEditSession ? "Edit project" : "Create new project"}
          </Button>
          <Button
            disabled={isProcessing}
            onClick={() => onCloseModal?.()}
            color="#10041c"
            backgroundColor="#fff"
            type="reset"
          >
            Cancel
          </Button>
        </Flex>
      </CreateProjectForm>
    </div>
  );
};

export default CreateProject;

const CreateProjectForm = styled.form`
  margin: 2rem auto;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;
