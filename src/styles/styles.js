import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#1979a9' : '#e07b39')};
  background-color: ${({ theme }) => (theme === 'light' ? 'lavenderblush' : '#1c100b')};
`;
