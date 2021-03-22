import {gql} from '@apollo/client';
const QUERY_USERS = gql`
  query MyQuery {
    task(where: {Users: {userId: {_eq: 1}}}) {
      userId
      taskStatus
      taskName
      taskExpired
    }
  }
`;

export {QUERY_USERS};

export default {};
