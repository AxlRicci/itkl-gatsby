import React from 'react'
import PortableText from 'react-portable-text'

import './article-interview.styles.scss'

// Iterates through array of question objects. Object contains; id, question, answer.
// Renders an article with individual sections for each question/answer pair.

const ArticleInterview = ({ questions, answers }) => (
    <article className="article__container">
        {
            questions.map((question) => (
                // Check that a question and answer pair exist.
                question.answer && answers.find(answer => answer.number === question.number)?.answer) ? (
                    <section className="article__q-a" key={question.number}>
                        <PortableText className="article__question" content={question.answer}/>
                        <PortableText className="article__answer" content={answers.find(answer => answer.number === question.number).answer} />
                    </section>
                ) : null
            )
        }
    </article>
)

export default ArticleInterview
