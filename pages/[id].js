import { useRouter } from "next/router";
import { client } from "../apolloConfig";
import { GET_PROJECT } from "../client/query.js";

import React, { useState, useEffect } from "react";

const getData = async (projectId) => {
  console.log(projectId);

  return await client.query({
    query: GET_PROJECT,
    variables: { id: projectId },
  });
};

const Project = () => {
  const router = useRouter();
  const data = getData();
  console.log(data);
  return (
    <div>
      <button onClick={() => router.back()}>Click here to go back</button>
      {projectData.errors && <span>{projectData.errors}</span>}
    </div>
  );
};

export default Project;
