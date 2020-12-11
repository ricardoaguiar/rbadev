import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const getSkills = graphql`
  {
    skill: contentfulAuthor {
      id
      skills
      copy: skillsCopy {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
const SkillSection = styled.div`
  background: var(--rise-7);
  border: 1px solid transparent;
  height: 60%;

  & p {
    letter-spacing: 0.03em;
    max-width: 68vw;
    margin: 2rem auto 4rem;
    line-height: 1.7;
  }
`

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10vw, 1fr));
  grid-gap: 1rem;
  margin: 0 auto;
  width: 50%;
  font-weight: bolder;
  & li {
    padding: 0;
    margin: 1rem;
    width: max-content;
    flex: 1 0 50%;
  }
`

const Skills = () => {
  const { skill } = useStaticQuery(getSkills)
  return (
    <SkillSection>
      <h3
        css={css`
          color: var(--rise-3);
          margin: 4rem 0 0 200px;
          font-size: 1.5rem;
        `}
      >
        Skills
      </h3>
      <div
        dangerouslySetInnerHTML={{
          __html: skill.copy.childMarkdownRemark.html,
        }}
      />
      <SkillsContainer>
        {skill.skills &&
          skill.skills.map(skills => {
            return <li key={skills}>{skills}</li>
          })}
      </SkillsContainer>
    </SkillSection>
  )
}

export default Skills
