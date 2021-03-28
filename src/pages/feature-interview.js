import React from 'react'
import Layout from '../layouts/layout'
import { graphql } from 'gatsby'
import IssueLayout from '../layouts/issueLayout'

import ArticleCover from '../components/article-cover/article-cover.component'
import ArticleInterview from '../components/article-interview/article-interview.component'
import ArticleContact from '../components/article-contact/article-contact.component'
import SuggestedReading from '../components/article-suggested-reading/article-suggested-reading.component'

const InterviewTemplate = ({data}) => {
    console.log(data)
    const { basicInformation, contact, allAboutYou, interviewCover, _rawInterviewQuestions, type } = data.sanityFeatureInterview;
    return (
        <Layout>
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
query InterviewTemplateTest {
  sanityFeatureInterview(slug: {current: {eq: "amit-ambegaonkar-standard" }}) {
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
    }
  }
`