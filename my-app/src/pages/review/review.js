import React, { useState } from 'react'
import { reviews } from '../posts/data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import styles from './review.module.css'
import { useLocation } from 'react-router-dom'
const Review = () => {
  const { state } = useLocation()
  const [rev, setRev] = useState(false)
  const [index, setIndex] = useState(0)
  const revew = reviews.filter((r) => r.pid == state)

  // if(revew.length<=0){
  //   setRev(true);
  // }

  // console.log(revew.length, 'test');

  const { name, job, image, text, pid } = revew[index]
  const checkNumber = (number) => {
    if (number > revew.length - 1) {
      return 0
    }
    if (number < 0) {
      return revew.length - 1
    }
    return number
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  return (
    <>
      <div>
        {state}
        <div className={styles.reviews}>
          <article className={styles.review}>
            <h1 className="text-center mb-3">See Reviews of your post</h1>
            <div className={styles.imgContainer}>
              <img src={image} alt={name} className={styles.personImg} />
              <span className={styles.quoteIcon}>
                <FaQuoteRight />
              </span>
            </div>
            <h4 className={styles.author}>{name || 'No Name'}</h4>
            <p className={styles.job}>{job}</p>
            <p className={styles.info}>{text}</p>
            <div className={styles.buttonContainer}>
              <button className={styles.prevBtn} onClick={prevPerson}>
                <FaChevronLeft />
              </button>
              <button className={styles.nextBtn} onClick={nextPerson}>
                <FaChevronRight />
              </button>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
export default Review
