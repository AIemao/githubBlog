import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  width: 100%;
  margin-top: -5.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 2rem 2rem 2.5rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`

export const ProfileCardDetails = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: ${(props) => props.theme['base-title']};
    }
  }

  > p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }

  > div {
    display: flex;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    > div {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`

export const LinkContainer = styled.div`
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    margin-bottom: -1px;
  }
`

export const LinkAContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  p {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
  }

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
  }
`
