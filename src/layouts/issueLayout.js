import React from 'react'
import './issueLayout.styles.scss'

const IssueLayout = ({cover, interview, contact, suggestedReading}) => {
    return (
        <>
            <section className="issue__content">
                <div className='issue__cover'>
                    {cover}
                </div>
                <div className="issue__interview">
                    {interview}
                </div>
                <div className="issue__contact">
                    {contact}
                </div>
            </section>
            <div className="suggested-reading">
                {suggestedReading}
            </div>
        </>
    )
}

export default IssueLayout
