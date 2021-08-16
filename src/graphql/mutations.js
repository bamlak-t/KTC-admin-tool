/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNotice = /* GraphQL */ `
  mutation CreateNotice(
    $input: CreateNoticeInput!
    $condition: ModelNoticeConditionInput
  ) {
    createNotice(input: $input, condition: $condition) {
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
export const updateNotice = /* GraphQL */ `
  mutation UpdateNotice(
    $input: UpdateNoticeInput!
    $condition: ModelNoticeConditionInput
  ) {
    updateNotice(input: $input, condition: $condition) {
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
export const deleteNotice = /* GraphQL */ `
  mutation DeleteNotice(
    $input: DeleteNoticeInput!
    $condition: ModelNoticeConditionInput
  ) {
    deleteNotice(input: $input, condition: $condition) {
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
export const createTimetable = /* GraphQL */ `
  mutation CreateTimetable(
    $input: CreateTimetableInput!
    $condition: ModelTimetableConditionInput
  ) {
    createTimetable(input: $input, condition: $condition) {
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
export const updateTimetable = /* GraphQL */ `
  mutation UpdateTimetable(
    $input: UpdateTimetableInput!
    $condition: ModelTimetableConditionInput
  ) {
    updateTimetable(input: $input, condition: $condition) {
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
export const deleteTimetable = /* GraphQL */ `
  mutation DeleteTimetable(
    $input: DeleteTimetableInput!
    $condition: ModelTimetableConditionInput
  ) {
    deleteTimetable(input: $input, condition: $condition) {
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
export const createHomework = /* GraphQL */ `
  mutation CreateHomework(
    $input: CreateHomeworkInput!
    $condition: ModelHomeworkConditionInput
  ) {
    createHomework(input: $input, condition: $condition) {
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
export const updateHomework = /* GraphQL */ `
  mutation UpdateHomework(
    $input: UpdateHomeworkInput!
    $condition: ModelHomeworkConditionInput
  ) {
    updateHomework(input: $input, condition: $condition) {
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
export const deleteHomework = /* GraphQL */ `
  mutation DeleteHomework(
    $input: DeleteHomeworkInput!
    $condition: ModelHomeworkConditionInput
  ) {
    deleteHomework(input: $input, condition: $condition) {
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
