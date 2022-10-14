import styled from "styled-components";

import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: .25rem;
    font-size: 1rem;
    font-weight: 400;
    height: 4rem;
    padding: 0 1.5rem;
    width: 100%;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
      background: var(--green);
      border: 0;
      border-radius: .25rem;
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      height: 4rem;
      margin-top: 1.5rem;
      padding: 0 1.5rem;
      transition: filter .2s;
      width: 100%;

      &:hover {
        filter: brightness(.9)
      }
    }
`

export const NewTransactionTypeContainer = styled.div`
  display: grid;
  gap: .5rem;
  grid-template-columns: 1fr 1fr;
  margin: 1rem 0;
`

interface RadioBoxProps {
  activeColor: 'green' | 'red'
  isActive: boolean
}

const colors = {
  green: '#33CC95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  align-items: center;
  background: ${props => props.isActive ? transparentize(.9, colors[props.activeColor]) : 'transparent'};
  border: 1px solid #d7d7d7;
  border-radius: .25rem;
  display: flex;
  gap: 1rem;
  height: 4rem;
  justify-content: center;
  transition: border-color .2s;

  &:hover {
    border-color: ${darken(.1, '#d7d7d7')};
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    color: var(--text-title);
    font-size: 1rem;
  }
`