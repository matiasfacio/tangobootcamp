import { useMutation, useQueryClient } from "react-query";

export const useUserMutations = (user) => {
  const queryClient = useQueryClient();
  const BASE_URL = "https://tbc.tangodefinitions.com/api/user";
  // const BASE_URL = "http://localhost:5000/api/user";
  return useMutation(
    ["user", user.email],
    async (newUser) => {
      try {
        const result = await fetch(`${BASE_URL}/update`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        const data = await result.json();

        if (result.ok) {
          return data;
        } else {
          throw new Error("user dosn't exist");
        }
      } catch (error) {
        return error;
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user", user.email]);
      },
    }
  );
};
