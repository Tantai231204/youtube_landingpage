
import { Box, Grid} from "@mui/material";
import "./SearchPage.css";
import ChannelTile from "../components/ChannelTile";
import VideoTile from "../components/VideoTile";
import Header from "../components/Header";
import Tag from "../components/Tag";

const SearchPage = () => {
  const videoData = {
    thumbnail: "/src/assets/images/thumbnails/thumbnail1.jpg",
    duration: "10:23",
    title: "Top 10 Món Ăn Việt Nam Nổi Tiếng Thế Giới",
    views: "1.2 Tr",
    time: "2 tuần trước",
    img: "https://yt3.ggpht.com/ytc/abc123/s88-c-k-c0x00ffffff-no-rj",
    name: "Ẩm Thực Việt",
    desc: "Khám phá những món ăn Việt Nam nổi tiếng thế giới mà bạn không thể bỏ qua!",
  };

  return (
    <>
      <Box className="searchPage">
        <Box className="searchPage__container" sx={{ width: "100%" }}>
          <Header />
          <Box className="data__container">
            <div className="tag">
              <Tag />
            </div>

            <Box className="channelTile__container">
              <ChannelTile />
            </Box>
            <Grid className="videoTile__container" container spacing={2}>
              <Grid item xs={12}>
                <VideoTile video={videoData} />
              </Grid>
              <Grid item xs={12}>
                <VideoTile video={videoData} />
              </Grid>
              <Grid item xs={12}>
                <VideoTile video={videoData} />
              </Grid>
              <Grid item xs={12}>
                <VideoTile video={videoData} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SearchPage;
