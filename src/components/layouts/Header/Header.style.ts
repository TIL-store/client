import { styled } from '@mui/material';

export const BetweenWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleLink = styled('a')`
  display: block;
  font-size: 1rem;
  ${({ theme }) => `
    color: ${theme.palette.primary.main};
  `}

  text-decoration: none;
`;
