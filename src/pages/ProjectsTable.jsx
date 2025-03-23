import styled from "styled-components";
import { projects } from "../../data/data";
import Button from "../ui/Button";
import ProjectRow from "../features/project/ProjectRow";

const ProjectTable = () => {

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
              <ProjectRow project={project} />
            </tr>
          ))}
        </tbody>
      </Table>

      <AddNewProject>
        <Button fontSize="1.5rem">Add New Project</Button>
      </AddNewProject>
    </TableContainer>
  );
};

export default ProjectTable;

const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  background: ${({ theme }) => theme.cardground};
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


const AddNewProject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
