import React, { useState } from 'react'
// import styles from './posts.module.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Posts = ({ id, title, content, img, removePost, review }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      {/* <Row>
        <Col md={4}> */}
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {readMore ? content : `${content.substring(0, 50)}...`}
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              onClick={() => {
                setReadMore(!readMore)
              }}
            >
              {readMore ? 'Showless' : 'Read More'}
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                removePost(id)
              }}
            >
              Remove
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                review(id)
              }}
            >
              Review
            </Button>
          </div>
        </Card.Body>
      </Card>
      {/* </Col>
      </Row> */}
    </>
  )
}

export default Posts
