import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
// import styles from './post.module.css';
import { allposts } from '../posts/allposts'
import { reviews } from '../posts/data'
import Posts from '../posts/posts'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../header/header'
import { useNavigate } from 'react-router-dom'

const Post = () => {
  const nav = useNavigate()

  const [posts, setPosts] = useState(allposts)
  const [rev, setRev] = useState(reviews)
  const removePost = (id) => {
    console.log(id, '........')
    const newPosts = posts.filter((post) => post.id !== id)
    setPosts(newPosts)
  }

  const review = (id) => {
    const revew = reviews.filter((r) => r.pid == id)
    console.log(revew, 'test')

    setRev(revew)
    nav('/review', { state: id })
  }
  return (
    <>
      <Header />
      <Container>
        <div className="mt-3">
          <h1 className="text-center">See Your Posts</h1>
          <div>
            {posts.map((post) => {
              console.log(post.id, 'POST ID')
              return (
                <>
                  <Row>
                    <Col md={2}></Col>
                    <Col md={8} key={post.id} className="mb-3">
                      <Posts
                        {...post}
                        removePost={removePost}
                        review={review}
                      />
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                </>
              )
            })}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Post
