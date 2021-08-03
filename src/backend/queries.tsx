import { useQuery, useQueryClient } from "react-query";
import { VideoApi } from "./VideoApi";

export const useQueryVideo = (props: string) => {
  const queryClient = useQueryClient();
  return useQuery(
    ["video", props],
    async () => await VideoApi.loadVideo(props),
    {
      onSuccess: () => queryClient.invalidateQueries(["video", props]),
    }
  );
};

export const useQueryAllVideos = () => {
  const queryClient = useQueryClient();
  return useQuery("videos", async () => VideoApi.loadAllVideos(), {
    onSuccess: () => queryClient.invalidateQueries("videos"),
  });
};
