import React, { useState } from 'react'
import Breadcrumbs from '../../components/Breadcrumbs'
import { GetAppQuery } from '../../graphql'

export default {
  component: Breadcrumbs,
  title: 'Components/Breadcrumbs'
}

const lessons = [
  { title: 'Foundations of JavaScript', id: 1, slug: 'js0' },
  { title: 'Variables', id: 2, slug: 'js0' }
] as GetAppQuery['lessons']

const parameters = {
  nextRouter: {
    asPath: 'pathacks.com/admin/lessons'
  }
}

export const Basic = () => {
  const [lesson, setLesson] = useState({
    title: lessons[0].title,
    id: lessons[0].id,
    slug: lessons[0].slug
  })

  return (
    <Breadcrumbs
      omitHomeRoute={false}
      lesson={lesson}
      setLesson={setLesson}
      lessons={lessons}
      homeTitle="Home"
    />
  )
}

Basic.parameters = parameters

export const WithOmitHomeRoute = () => {
  const [lesson, setLesson] = useState({
    title: lessons[0].title,
    id: lessons[0].id,
    slug: lessons[0].slug
  })

  return (
    <Breadcrumbs
      omitHomeRoute={true}
      lesson={lesson}
      setLesson={setLesson}
      lessons={lessons}
      homeTitle="Home"
    />
  )
}

WithOmitHomeRoute.parameters = parameters
