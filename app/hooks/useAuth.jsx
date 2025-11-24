// import React, { use } from "react";
// import { AuthContext } from "../Context/AuthContext/AuthContext";

// const useAuth = () => {
//   const authInfo = use(AuthContext);
//   return authInfo;
// };

// export default useAuth;
"use client";

import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuth() {
  const authInfo = use(AuthContext);
  return authInfo;
}
