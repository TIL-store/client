import { styled } from '@mui/material';

const ChipList = styled('ul')`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 24px;
  overflow-x: auto;
  list-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ChipList;
