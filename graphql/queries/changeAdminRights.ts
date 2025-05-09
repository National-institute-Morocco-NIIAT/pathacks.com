import { gql } from '@apollo/client'

const CHANGE_ADMIN_RIGHTS = gql`
  mutation changeAdminRights($id: Int!, $status: Boolean!, $email: String!) {
    changeAdminRights(id: $id, status: $status, email: $email) {
      success
    }
  }
`

export default CHANGE_ADMIN_RIGHTS
