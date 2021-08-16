/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNotice = /* GraphQL */ `
  query GetNotice($id: ID!) {
    getNotice(id: $id) {
      id
      year_group
      notices {
        cellID
        name
        time
        data
      }
      createdAt
      updatedAt
    }
  }
`;
export const listNotices = /* GraphQL */ `
  query ListNotices(
    $filter: ModelNoticeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        year_group
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTimetable = /* GraphQL */ `
  query GetTimetable($id: ID!) {
    getTimetable(id: $id) {
      id
      year_group
      tables {
        cellID
        name
        time
        data
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTimetables = /* GraphQL */ `
  query ListTimetables(
    $filter: ModelTimetableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimetables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        year_group
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHomework = /* GraphQL */ `
  query GetHomework($id: ID!) {
    getHomework(id: $id) {
      id
      year_group
      homework {
        cellID
        name
        time
        data
      }
      createdAt
      updatedAt
    }
  }
`;
export const listHomework = /* GraphQL */ `
  query ListHomework(
    $filter: ModelHomeworkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomework(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        year_group
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
