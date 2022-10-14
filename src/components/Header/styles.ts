import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 2rem 1rem 12rem;

  button {
    background: var(--blue-light);
    border: 0;
    border-radius: .25rem;
    color: #FFF;
    font-size: 1rem;
    height: 3rem;
    padding: 0 2rem;
    translate: filter .2s;

    &:hover {
      filter: brightness(.9)
    }

    &:active, &:focus {
      outline: none
    }
  }
`