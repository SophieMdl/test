import { gql } from "@apollo/client";

export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    projects {
      title
      status
      target
      collected
      image_url
      id
      user {
        first_name
        last_name
      }
    }
  }
`;

export const GET_PROJECT = gql`
  query GetProject {
    project(id: $id) {
      title
      status
      target
      collected
      image_url
      id
      description
      user {
        first_name
        last_name
      }
    }
  }
`;
