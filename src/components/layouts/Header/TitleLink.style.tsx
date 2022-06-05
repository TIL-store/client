import { styled } from '@mui/material';

const TitleLink = styled('a')`
  display: block;
  font-size: 1rem;
  ${({ theme }) => `
    color: ${theme.palette.primary.main};
  `}

  text-decoration: none;
`;

export default TitleLink;
