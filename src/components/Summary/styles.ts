import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -5rem;
  width: 100%;

  div {
    background: var(--shape);
    border-radius: .5rem;
    color: var(--text-title);
    padding: 1.5rem 2rem;

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  strong {
    display: block;
    font-size: 2rem;
    font-weight: 500;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    padding: 1rem;

    div {
      min-width: 75vw;
      padding: 2.5rem 2rem;

      &:last-child {
        order: -1;
      }
    }
  }
`