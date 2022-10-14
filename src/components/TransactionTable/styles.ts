import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  padding: 0 1rem;

  h2 {
    color: var(--blue);
    margin-bottom: 1rem;
  }

  table {
    border-spacing: 0 .5rem;
    width: 100%;

    th { 
      color: var(--text-body);
      font-weight: 400;
      line-height: 1.5rem;
      padding: 1rem 2rem;
      text-align: left;
    }

    td {
      background: var(--shape);
      border: 0;
      color: var(--text-body);
      padding: 1rem 2rem;

      &:first-child {
        border-radius: .25rem 0 0 .25rem;
        color: var(--text-title);
      }

      &:last-child {
        border-radius: 0 .25rem .25rem 0;
      }

      &.deposit { 
        color: var(--green);
      }

      &.withdraw { 
        color: var(--red);
      }
    }
  }

  @media (max-width: 768px) {
    table {
      th, td {
        padding: .5rem 1rem;
      }

      td {
        &:first-child {
          border-radius: .25rem .25rem 0 0;
        }

        &:last-child {
          border-radius: 0 0 .25rem .25rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    table {
      thead {
        display: none;
      }

      td {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
  }
`