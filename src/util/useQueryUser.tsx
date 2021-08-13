import { useQuery } from "react-query";

export const useQueryUser = (user) => {
  const BASE_URL = "https://tbc.tangodefinitions.com/api/user";
  // const BASE_URL = "http://localhost:6000/api/user";
  return useQuery(["user", user.email], async () => {
    try {
      const result = await fetch(`${BASE_URL}/authenticate`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await result.json();

      if (result.ok) {
        return data;
      } else {
        const errorMessage = data.message;
        throw Error(errorMessage);
      }
    } catch (error) {
      return error;
    }
  });
};
