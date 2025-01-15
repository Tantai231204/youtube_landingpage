import "./ChannelTile.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function ChannelTile() {
  return (
    <div className="channelTile">
      <div className="tile_left">
        <img className="channelImg" src="/src/assets/images/hq720.jpg" alt="" />
      </div>

      <div className="tile_middle">
        <div className="tile_middle_data">
          <p className="channelName">
            Vie Channel <CheckCircleIcon />
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#606060",
              letterSpacing: "0.3px",
            }}
          >
            11,1 triệu người đăng ký &bull; 162 videos
          </p>
          <p style={{ fontSize: "14px", color: "#606060" }}>
            Vie Channel là kênh phát sóng chính thức các chương trình giải trí
            Việt được khán giả cả nước yêu thích nhất: Rap Việt, Ca Sĩ ...
          </p>
        </div>
      </div>

      <div className="tile_right">
        <button className="subscribe">Đăng ký</button>
      </div>
    </div>
  );
}

export default ChannelTile;
