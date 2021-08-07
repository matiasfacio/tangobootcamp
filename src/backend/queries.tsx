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

export const useQueryAllVideos = (id: number) => {
  const queryClient = useQueryClient();
  return useQuery(["videos", id], async () => VideoApi.loadAllVideos(id), {
    onSuccess: () => queryClient.invalidateQueries(["videos", id]),
  });
};
