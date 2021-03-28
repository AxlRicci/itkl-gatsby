import React from 'react'
import Layout from '../../layouts/layout'
import { graphql } from 'gatsby'

import IssueLayout from '../../layouts/issueLayout'
import ArticleCover from '../../components/article-cover/article-cover.component'
import ArticleInterview from '../../components/article-interview/article-interview.component'
import ArticleContact from '../../components/article-contact/article-contact.component'
import SuggestedReading from '../../components/article-suggested-reading/article-suggested-reading.component'
import SEO from '../../components/seo'

const InterviewTemplate = ({data}) => {
  const { basicInformation, contact, allAboutYou, interviewCover, _rawInterviewQuestions, type, slug } = data.sanityFeatureInterview;
  return (
      <Layout>
        <SEO 
          title={basicInformation.fullName}
          description={`In The Know Local Magazine Article for ${basicInformation.fullName} ${basicInformation.description}`}
          image={interviewCover.image.asset.fluid.srcWebp}
          pathname={slug.current}
        />
          <IssueLayout
              cover={
                  <ArticleCover
                      name={basicInformation.fullName}
                      alt={interviewCover.alt}
                      img={interviewCover.image.asset.fluid.srcWebp}
                      description={basicInformation.description}
                  />
              }
              interview={
                  <ArticleInterview 
                      questions={type._rawInterviewQuestions}
                      answers={_rawInterviewQuestions}
                  />
              }
              contact={
                  <ArticleContact contactInfo={contact} fullName={basicInformation.fullName}/>
              }
              suggestedReading={
                <SuggestedReading />
              }
          />
      </Layout>
  )
}

export default InterviewTemplate

export const query = graphql`
query InterviewTemplate($slug: String) {
  sanityFeatureInterview(slug: {current: {eq: $slug }}) {
    basicInformation {
        fullName
        description
        area
      }
      allAboutYou {
        children {
          marks
          text
        }
        list
        style
      }
      contact {
        contactType
        url
      }
      _rawInterviewQuestions
      interviewCover {
        image {
          asset {
            fluid {
              srcWebp
            }
          }
        }
        alt
      }
      type {
        _rawInterviewQuestions
      }
      slug {
        current
      }
    }
  }
`