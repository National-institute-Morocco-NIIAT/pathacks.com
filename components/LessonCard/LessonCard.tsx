import { useQuery } from '@apollo/client'
import React, { useRef } from 'react'
import { CheckCircle } from 'react-feather'
import GET_SUBMISSIONS from '../../graphql/queries/getSubmissions'
import NavLink from '../NavLink'
import Image from 'next/image'
import styles from './lessonCard.module.scss'
import { Submission, SubmissionStatus } from '../../graphql'
import Link from 'next/link'
import { get } from 'lodash'
import LessonCertificate from './LessonCertificate';
import html2canvas from "html2canvas";

type Props = {
  lessonId: number
  coverImg: string
  title: string
  challengeCount: number
  description: string
  currentState?: string
  reviewUrl: string
  challengesUrl: string
  docUrl: string,
  passedAt: number,
  user?: any,
}

type ReviewButtonProps = {
  isCompleted: boolean
  reviewUrl: string
  lessonId: number
  className?: string
}

const ReviewButton: React.FC<ReviewButtonProps> = props => {
  const { loading, data } = useQuery<{ submissions: Submission[] }>(
    GET_SUBMISSIONS,
    {
      variables: { lessonId: props.lessonId },
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'cache-first'
    }
  )

  const style = `btn btn-sm btn-primary text-white float-end mb-2 me-2 ${props.className || ''
    }`

  if (!props.isCompleted) {
    return null
  }

  const submissions = get(data, 'submissions') || []

  const pendingSubmissionsCount = submissions.reduce((acc, val) => {
    if (val.status === SubmissionStatus.Open) {
      return acc + 1
    }
    return acc
  }, 0)

  if ((data && !pendingSubmissionsCount) || (!data && !loading)) return <></>

  const content = loading ? (
    <div className="spinner-border spinner-border-sm mx-1" role="status" />
  ) : (
    <span>{pendingSubmissionsCount}</span>
  )

  return (
    <Link href={props.reviewUrl}>
      <a data-testid="review-submissions-count" className={style}>
        Review {content} Submissions
      </a>
    </Link>
  )
}

const LessonCard: React.FC<Props> = props => {

  const certRef = useRef(null)

  const downloadCertificate = () => {
    if (!certRef.current) {
      return;
    }

    html2canvas(certRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }).catch((error) => {
      console.error("html2canvas error:", error);
    });
  };

  const containerClass =
    props.currentState === 'inProgress'
      ? `${styles['lesson-card__container_inprogress']} border-primary`
      : 'border-0'
  const mobile = (
    <>
      <h4 className={`${styles['lesson-card__title']} fw-bold mt-3 `}>
        <div
          className="d-flex justify-content-center"
          
        >
          <div className="align-self-center">
            <NavLink path={props.challengesUrl}>{props.title}</NavLink>
          </div>
          
            {props.currentState === 'completed' && (
              <span
                className={`${styles['lesson-card__badge']} badge rounded-pill p-0`}
              >
                <CheckCircle size="15" />
                <span className="mx-1 d-none d-md-block">COMPLETED</span>
              </span>
            )}
        </div>
      </h4>
      <Image
        src={`/assets/curriculum/${props.coverImg}`}
        alt={props.coverImg}
        className="rounded"
        objectFit="cover"
        layout="intrinsic"
        width="116"
        height="165"
      />
      <div>
        <div className="d-inline-block mt-3">
          <img
            className="me-2"
            src="/assets/curriculum/icons/icon-challenge.svg"
            alt="icon-challenge"
          />
          <span className={`${styles['lesson-card__icon-text']}`}>
            {props.challengeCount} CHALLENGES
          </span>
        </div>
      </div>
      <p className="mt-2">{props.description}</p>
      
      <ReviewButton
        isCompleted={props.user && props.user.isAdmin}
        reviewUrl={props.reviewUrl}
        lessonId={props.lessonId}
        className="me-0"
      />

      {/* download certificate for mobile */}
      {
        props.currentState === 'completed' && (
          <div
            style={{
              marginBottom:"10px",
              // backgroundColor:"pink",
              display: "flex",
              justifyContent:"center"
            }}
            onClick={downloadCertificate}
          >
            <span 
              style={{
                color: "#5440D8",
                fontFamily: "sans-serif, montserrat",
                fontSize: "12px",
                fontWeight: 600,
                textDecoration: "underline",
                cursor: "pointer",
                textAlign:"center"
              }}
            >
              Download Certificate
            </span>
          </div>
        )
      }

    </>
  )

  const tabletAndDesktop = (
    <>
      <Image
        src={`/assets/curriculum/${props.coverImg}`}
        alt={props.coverImg}
        className="align-self-center rounded"
        width="116"
        height="165"
        objectFit="contain"
      />

      <div
        className={`${styles['lesson-card__description']} ps-4 d-none d-sm-block`}
      >
        <div
          className="d-flex"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <h4 className={`${styles['lesson-card__title']} fw-bold mt-3`}>
            <NavLink
              path={props.challengesUrl}
              className="text-primary"
              hoverUnderline
            >
              {props.title}
            </NavLink>
          </h4>
          {props.currentState === 'completed' && (
            <div>
              <span
                className={`${styles['lesson-card__badge']} badge rounded-pill mt-2 me-2 py-2 d-flex align-items-center`}
              >
                <CheckCircle size="15" />
                <span className="mx-1 d-none d-md-block">COMPLETED</span>
              </span>

              {/* download certificate for desktop */}
              <span
                className={`badge rounded-pill mt-2 me-2 py-2 d-flex align-items-center`}
                style={{
                  color: "#5440D8",
                  fontFamily: "sans-serif, montserrat",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={downloadCertificate}
              >
                <span className="mx-1">Download Certificate</span>
              </span>
            </div>
          )}
        </div>
        <div>
          <div>
            <div className="d-inline-block me-4">
              <img
                className="me-2"
                src="/assets/curriculum/icons/icon-challenge.svg"
                alt="icon-challenge"
              />
              <span className={`${styles['lesson-card__icon-text']}`}>
                {props.challengeCount} CHALLENGES
              </span>
            </div>
          </div>
          <p className="mt-2">{props.description}</p>
        </div>
        <ReviewButton
          isCompleted={props.user && props.user.isAdmin}
          reviewUrl={props.reviewUrl}
          lessonId={props.lessonId}
        />
      </div>
    </>
  )

  return (
    <div className={`card shadow-sm mt-3 ${containerClass}`}>
      <div className="d-flex d-sm-none flex-column px-3">{mobile}</div>
      <div className="d-none d-sm-flex p-2">{tabletAndDesktop}</div>

      {props.currentState === 'completed' && (
        <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
          <LessonCertificate
            ref={certRef}
            passedAt={props.passedAt}
            title={props.title}
          />
        </div>
      )}

      {props.currentState === 'inProgress' && (
        <div className="p-2 bg-primary">
          <NavLink
            path={props.docUrl}
            className={`${styles['lesson-card__button']} btn btn-light me-2 my-1 text-primary`}
            external
          >
            Start Lesson
          </NavLink>
          <NavLink
            path={props.challengesUrl}
            className={`${styles['lesson-card__button']} btn btn-primary my-1 text-white border border-white`}
          >
            View Challenges
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default LessonCard