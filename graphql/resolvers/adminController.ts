import { Context } from '../../@types/helpers'
import { ChangeAdminRightsMutationVariables } from '../../graphql'
import prisma from '../../prisma'
import { isAdminOrThrow } from '../../helpers/isAdmin'
import { mentorEmail } from '../../helpers/mail'

export const changeAdminRights = async (
  _parent: void,
  { id, status, email }: ChangeAdminRightsMutationVariables,
  { req }: Context
) => {
  isAdminOrThrow(req)
  await prisma.user.update({ where: { id }, data: { isAdmin: status } })
  if(status) {
    await mentorEmail(email);
  }
  return {
    success: true
  }
}
