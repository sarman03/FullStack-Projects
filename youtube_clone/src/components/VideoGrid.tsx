import {VideoCard} from "../components/VideoCard";
const VIDEOS=[{
    title:"Peaky Blinders | Hindi| English",
    img:"photo2.jpg",
    author:"Sarman",
    views:"45M"
},
{
    title:"Peaky Blinders | Hindi| English",
    img:"photo2.jpg",
    author:"Sarman",
    views:"45M"
},
{
    title:"Peaky Blinders | Hindi| English",
    img:"photo2.jpg",
    author:"Sarman",
    views:"45M"
},]

export const VideoGrid=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
            VIDEOS.map(video=> <div>
                 <VideoCard
      title={video.title}
      img={video.img}
      author={video.author}
      views={video.views}
      ></VideoCard>
            </div>)
        }
    </div>
}