import { ApolloCache } from '@apollo/client'
import GET_PREVIOUS_SUBMISSIONS from '../graphql/queries/getPreviousSubmissions'
import {
  AddCommentMutation,
  Submission,
  GetPreviousSubmissionsQuery
} from '../graphql'

import { RecursivePartial } from '../@types/utils'
import _ from 'lodash'
/*
  update function modifies client cache after mutation
  closure is used because it's the only way to pass additional arguments to update function 
  (update has only two arguments - cache and result of query)
*/

type UpdateCacheParams = {
  submissionId: number
  lessonId: number
  challengeId: number
  userId: number
  commentToDeleteId?: number
  content?: string
  name?: string
  username?: string
  line?: number
  fileName?: string
}

export const updateCache = ({
  submissionId,
  commentToDeleteId,
  content,
  name,
  username,
  lessonId,
  line,
  fileName,
  challengeId,
  userId
}: UpdateCacheParams) => {
  return (cache: ApolloCache<AddCommentMutation>) => {
    const data = cache.readQuery<GetPreviousSubmissionsQuery>({
      query: GET_PREVIOUS_SUBMISSIONS,
      variables: {
        lessonId,
        challengeId,
        userId
      }
    })
    if (!data) throw new Error('No cache to update')
    const current = data.getPreviousSubmissions?.filter(
      s => s.id === submissionId
    )
    const copy = _.cloneDeep(current) as RecursivePartial<Submission>[]
    if (!copy.length)
      throw new Error('Incorrect submission id (no submission was found)')

    if (commentToDeleteId) {
      _.remove(copy[0].comments!, comment => comment!.id === commentToDeleteId)
    } else {
      copy[0].comments!.push({
        content,
        fileName,
        line,
        submissionId,
        author: {
          name,
          username
        }
      })
    }

    const newData = data?.getPreviousSubmissions?.map(s => {
      if (s.id === submissionId) return copy[0]
      return s
    })
    cache.writeQuery({
      query: GET_PREVIOUS_SUBMISSIONS,
      variables: { lessonId, challengeId, userId },
      data: { ...data, getPreviousSubmissions: newData }
    })
  }
}
