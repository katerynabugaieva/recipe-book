import styled from "styled-components"

export const Wrapper = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => (theme === "light" ? "#f2fff2" : "#737d64")};

  h1,
  h2,
  h3,
  h4,
  p {
    color: ${({ theme }) => (theme === "dark" ? "#F0FFFF" : "#212121")};
  }

  h5, h6 {
    color: ${({ theme }) => (theme === "dark" ? "#f2fff2" : "#8fb3b3")};
  }

  p {
    font-size: 12px;
  }
`
