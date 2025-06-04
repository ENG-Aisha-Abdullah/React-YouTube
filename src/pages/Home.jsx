import VideoRight from "./VideoRight";
import VideosLeft from "./VideosLeft";

function Home() {
  return (
    <div className="flex  h-screen gap-2">
      <div className="w-3/4">
        <VideoRight />
      </div>
      <div className="w-2/4">
        <VideosLeft />
      </div>
    </div>
  )
}

export default Home;
