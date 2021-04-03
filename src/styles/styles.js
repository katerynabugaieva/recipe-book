import styled from 'styled-components';
import { rhythm } from '../utils/typography';

export const Wrapper = styled.div`
margin: 0 auto;
padding-top: ${rhythm(1.5)};
  background-color: ${({ theme }) => (theme === 'light' ? 'lavenderblush' : '#000')};
  
  h3, h4, p{
    color: ${({ theme }) => (theme === 'dark' ? '#F0FFFF' : '#212121')};
  }

  h5 {
    color: ${({ theme }) => (theme === 'dark' ? '#e07b39' : '#1979a9')};
  }

  p {
    font-size: 12px;
  }
 
`;
