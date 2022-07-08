import { styled } from '@mui/material';

const Footer = styled('footer')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  background-color: #efefef;

  address {
    font-size: 0.75rem;
    font-style: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default Footer;
