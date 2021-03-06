import styled from '@emotion/styled'
import { respondTo } from '../utils/_respondTo'

export const ProjectIntro = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  padding-top: 5rem;
  line-height: 1.6;
  margin: auto 0;
  font-size: 1.15rem;

  ${respondTo.T900`
    padding: 10vh 14vw;
  `}
`
export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  line-height: 1.6;
  margin: auto 0;
  font-size: 1.15rem;

  ${respondTo.T900`
    padding: 10vh 14vw;
  `}
`
export const ProjectDetails = styled.div`
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  ${respondTo.T900`
    max-width: 80vw;
  
  `}
`

export const PortfolioList = styled.div`
  display: flex;
  padding: 1rem;
  margin: 0.4rem 0.8rem;
  border-radius: 10px;
  background-color: var(--rise-7);
  border: 2px solid var(--rise-5);
  flex: 1;
  align-items: center;

  & div {
    display: flex;
    flex-flow: column;
    width: 100%;
    margin-left: 0.5rem;
    padding-inline: 1rem;
    padding: 0.5rem 1rem;
    border-left: 1px solid var(--rise-5);
  }

  & h4 {
    text-transform: uppercase;
    margin-inline: 0.5rem;
    margin-block: 0;
    margin: 0 0.5rem;
    text-align: left;
  }
  & p {
    align-items: center;
  }
  ${respondTo.T900`
    flex: 0 1 auto;
    margin: 0.4rem;
  `}
`
export const SingleImage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  margin: auto;

  & div {
    width: 95%;
    flex: 1;
  }
  & div + div {
    padding: 0.5rem;
  }

  ${respondTo.T900`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    max-width: 80vw;
    margin-left: 10vw;
  `}
`

export const SingleImageLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vh;

  & div + div {
    order: -1;
    /* background-color: var(--rise-7);
    border: 4px solid var(--rise-7);
    border-radius: 8px; */
  }

  & div {
    flex: 1;
    width: 95vw;
    margin: auto;
  }

  ${respondTo.T900`
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 75vw;
    margin: auto;

    & div {
      order: -2;
    }

  `}
`

export const SingleImageRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 75vw;
  margin: auto;
  margin-bottom: 5rem;

  & div + div {
    order: -1;
    margin-bottom: -1rem;
    margin-top: 1rem;
  }
  & div {
    flex: 1;
    width: 95vw;
  }

  ${respondTo.T900`
    flex-direction: row;

    & div + div {
    order: 0;
 }
  `}
`
export const MultipleImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & div {
    margin-bottom: 0.5rem;
  }

  ${respondTo.T900`
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  `}
`

export const ImageDescription = styled.div`
  display: flex;
  padding: 2rem;
  font-size: 1.3rem;
  line-height: 1.5;

  ${respondTo.T900`
    max-width: 25vw;
  `}
`
export const MultipleImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: -10rem;

  ${respondTo.T900`
    flex-flow: row wrap;
    max-width: 25vw;
    margin-top: 0;

    & p {
      margin-bottom: .8rem;
    }
  `}
`

export const Published = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  font-size: smaller;
  margin: 2rem;

  & span[data-name='separator']::after {
    content: ' 😃 ';
  }

  ${respondTo.T900`
    & span[data-name="separator"]::after {
    content: "•|•";
  }
    margin: 5rem auto;
  
  `}
`
