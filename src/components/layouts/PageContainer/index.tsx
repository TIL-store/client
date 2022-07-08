import { styled } from '@mui/material';

const PageContainer = styled('div')`
  position: relative;
  min-height: 100vh;

  & main {
    margin-bottom: 80px;
  }

  & footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ${({ theme }) => `
    padding-bottom: ${theme.dimensions.footerHeight}px;

    footer {
      height: ${theme.dimensions.footerHeight}px;
    }
  `}
`;

export default PageContainer;
