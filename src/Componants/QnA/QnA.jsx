import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import("./QnA.css")

const QnA = ({ qna }) => {
  return (
    <>
      <div className="  qnaforcomplete" data-aos="zoom-in">
        <h2 className='qnaheading mainHeadingH2' data-aos="zoom-in">Frequently Asked Questions</h2>
        <p className='qndp ParagraphH2P' data-aos="zoom-in" > Have quiries? We are here to help!</p>
        <Accordion className='acordiankadata' flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordion-header ParagraphH2P">{qna ? qna.q1 : "Do you offer rush printing services?"}</Accordion.Header>
            <Accordion.Body className='ParagraphH2P'>
              {qna ? qna.a1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className='ParagraphH2P'>{qna ? qna.q2 : "Do you offer rush printing services?"}</Accordion.Header>
            <Accordion.Body className="accordion-header ParagraphH2P">
              {qna ? qna.a2 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className='ParagraphH2P'>{qna ? qna.q3 : "Do you offer rush printing services?"}</Accordion.Header>
            <Accordion.Body className='ParagraphH2P'>
              {qna ? qna.a3 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className='ParagraphH2P'>{qna ? qna.q4 : "Do you offer rush printing services?"}</Accordion.Header>
            <Accordion.Body className='ParagraphH2P'>
              {qna ? qna.a4 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className='ParagraphH2P'>{qna ? qna.q1 : "Do you offer rush printing services?"}</Accordion.Header>
            <Accordion.Body className='ParagraphH2P'>
              {qna ? qna.a1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

    </>
  )
}

export default QnA