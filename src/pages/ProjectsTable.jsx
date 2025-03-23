import styled from "styled-components";
import { FiEdit, FiTrash } from "react-icons/fi";
import { projects } from "../../data/data";
import Button from "../ui/Button";

const ProjectTable = () => {
  const onEdit = (id) => {
    console.log("Edit Project with id", id);
  }

  const onDelete = (id) => {
    console.log("Delete Project with id ", id);
  }
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Created At</Th>
            <Th>Title</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <Td>{new Date(project.createdAt).toLocaleDateString()}</Td>
              <Td>{project.title.length > 50 ? project.title.slice(0, 50) + "..." : project.title}</Td>
              <TdActions>
                <FiEdit onClick={() => onEdit(project.id)} />
                <FiTrash onClick={() => onDelete(project.id)} />
              </TdActions>
            </tr>
          ))}
        </tbody>
      </Table>

      <AddNewProject>
        <Button fontSize='1.5rem' >Add New Project</Button>
      </AddNewProject>

    </TableContainer>
  );
};

export default ProjectTable;

const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  background: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  border-radius: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.shadow};
  `;

const TdActions = styled(Td)`
  display: flex;
  padding: 10px;
  gap: 10px;
  height: inherit;
  cursor: pointer;

  svg {
    font-size: 2rem;
    transition: color 0.2s ease-in-out;
  }

  svg:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const AddNewProject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`