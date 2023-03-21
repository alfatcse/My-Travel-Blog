import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoDescription from "../components/description/VideoDescription";
import VideoPlayer from "../components/description/VideoPlayer";
import RelatedVedioList from "../components/list/RelatedVedioList";
import Loading from "../components/ui/Loading";
import { fetchVideo } from "../features/video/videoSlice";

const Video = () => {
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const dispatch = useDispatch();
  const { videoId } = useParams();
  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);
  const {link,title,id}=video||{};
  let content = null;
  if (isLoading) {
    content = <Loading></Loading>;
  }
  if(!isLoading&&isError){
    content=<div className="col-span-12">{error}</div>
  }
  if(!isLoading&!isError&&!video?.id){
    content=<div className="col-span-12">No video Found</div>
  }
  if(!isLoading&!isError&&video?.id){
    content= <div class="grid grid-cols-3 gap-2 lg:gap-8">
    <div class="col-span-full w-full space-y-8 lg:col-span-2">
      <VideoPlayer link={link} title={title}></VideoPlayer>
      <VideoDescription id={id} video={video}></VideoDescription>
    </div>
    <RelatedVedioList></RelatedVedioList>
  </div>
  }
  return (
    <>
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
         {content}
        </div>
      </section>
    </>
  );
};

export default Video;
