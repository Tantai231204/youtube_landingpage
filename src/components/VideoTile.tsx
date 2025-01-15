import PropTypes from "prop-types";
import { MoreVert } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./VideoTile.css";

function VideoTile({ video }) {
  return (
    <div className="videoTile">
      <div className="image_div">
        <img className="thumbnail" src={video.thumbnail} alt={video.title} />
        <div className="duration">{video.duration}</div>
      </div>
      <div className="title_data">
        <div className="title_div">
          <span>{video.title}</span>
        </div>
        <p className="views">
          {video.views} lượt xem • {video.time}
        </p>
        <div className="data">
          <img
            src="/src/assets/images/hq720.jpg"
            alt={video.name}
            className="channelThumbnail"
          />
          <p className="channelNameDesc">{video.name}</p>
          <CheckCircleIcon className="channelIcon" />
        </div>
        <p className="desc">{video.desc}</p>
      </div>
      <div>
        <MoreVert className="vertBtn" />
      </div>
    </div>
  );
}

VideoTile.propTypes = {
  video: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default VideoTile;
