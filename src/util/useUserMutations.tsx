import { useMutation } from "react-query";

export const useUserMutations = (user, options) => {
  const BASE_URL = "https://tbc.tangodefinitions.com/api/user";
  return useMutation(
    ["user", user.email],
    async (newUser) => {
      const result = await fetch(`${BASE_URL}/update`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (result.ok) {
        return result;
      } else {
        throw Error("Error fetching data");
      }
    },
    options
  );
};
