import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/realatedVideos/relatedVideosSlice";
import RelatedVedioListItem from "./RelatedVedioListItem";
import Loading from "../ui/Loading";
const RelatedVedioList = ({currentVideoId,tags}) => {
  const dispatch=useDispatch();
  const {relatedVideos,isLoading,isError,error}=useSelector((state)=>state.relatedVideos)
  useEffect(()=>{
     dispatch(fetchRelatedVideos({tags,id:currentVideoId}))
  },[dispatch,tags,currentVideoId])
  let content=null;
  if(isLoading){
    content=<Loading></Loading>
  }
  if(!isLoading&&isError){
    content=<div className="col-span-12">{error}</div>
  }
  if(!isLoading&&!isError&&relatedVideos?.length===0){
    content=<div className="col-span-12">No Related Video Found</div>
  }
  if(!isLoading&&!isError&&relatedVideos?.length>0){
    content=relatedVideos.map((video)=>(<RelatedVedioListItem key={video.id} video={video}></RelatedVedioListItem>))
  }
  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVedioList;
