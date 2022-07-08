import { styled } from '@mui/material';

export const HiddenTitle = styled('h2')`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
`;

export const PaginationWrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const CardList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const CardItem = styled('li')`
  width: calc(25% - 12px);
  padding: 0;
  margin: 0;
  @media (max-width: 1024px) {
    width: calc(33.333% - 16px);
  }
  @media (max-width: 768px) {
    width: calc(50% - 8px);
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;
