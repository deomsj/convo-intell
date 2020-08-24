import styled from 'styled-components';

export default styled.main`
  padding: 10px;

  article {
    padding: 10px 20px;

    &.active {
       {
        background-color: ${({ theme }) =>
          theme.colors.primary + theme.colors.opacity.light};
      }
    }

    span {
      cursor: pointer;

      &.active,
      &:hover {
        background-color: ${({ theme }) =>
          theme.colors.primary + theme.colors.opacity.middle};
      }
    }
  }
`;
