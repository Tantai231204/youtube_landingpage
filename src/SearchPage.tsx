import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "./SearchPage.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ChannelTile from "./ChannelTile";

const SearchPage = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "700px",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="searchPage">
        <div className="categories">
          <button>Tất cả</button>
          <button>Short</button>
          <button>Video</button>
          <button>Chưa xem</button>
          <button>Đã xem</button>
          <button>Tải lên gần đây</button>
          <button>Trực tiếp</button>
          <button className="forwardButton">
            <ArrowForwardIosOutlinedIcon />
          </button>
          <button onClick={handleOpen} className="filterBlock">
            <h2>Bộ lọc</h2>
            <TuneOutlinedIcon className="filterIcon" />
          </button>
        </div>
        <Modal
          aria-labelledby="filter-modal-title"
          aria-describedby="filter-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="filter-modal-title"
                variant="h6"
                component="h2"
                sx={{ mb: 2, textAlign: "left" }}
              >
                Bộ lọc tìm kiếm
              </Typography>
              <div className="filterModalContent">
                <div className="filterSection">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginBottom: "40px" }}
                  >
                    NGÀY TẢI LÊN
                    <hr />
                  </Typography>
                  <ul>
                    <li>Một giờ qua</li>
                    <li>Hôm nay</li>
                    <li>Tuần này</li>
                    <li>Tháng này</li>
                    <li>Năm nay</li>
                  </ul>
                </div>
                <div className="filterSection">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginBottom: "40px" }}
                  >
                    LOẠI
                    <hr />
                  </Typography>
                  <ul>
                    <li>Video</li>
                    <li>Kênh</li>
                    <li>Danh sách phát</li>
                    <li>Phim</li>
                  </ul>
                </div>
                <div className="filterSection">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginBottom: "40px" }}
                  >
                    THỜI LƯỢNG
                    <hr />
                  </Typography>
                  <ul>
                    <li>Dưới 4 phút</li>
                    <li>4 – 20 phút</li>
                    <li>Trên 20 phút</li>
                  </ul>
                </div>
                <div className="filterSection">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginBottom: "40px" }}
                  >
                    VIDEO NỔI BẬT
                    <hr />
                  </Typography>
                  <ul>
                    <li>Trực tiếp</li>
                    <li>4K</li>
                    <li>HD</li>
                    <li>Phụ đề</li>
                    <li>Giấy phép Creative Commons</li>
                    <li>360°</li>
                    <li>VR180</li>
                    <li>3D</li>
                    <li>HDR</li>
                    <li>Vị trí</li>
                    <li>Đã mua</li>
                  </ul>
                </div>
                <div className="filterSection">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginBottom: "40px" }}
                  >
                    SẮP XẾP THEO
                    <hr />
                  </Typography>
                  <ul>
                    <li>Mức độ liên quan</li>
                    <li>Ngày tải lên</li>
                    <li>Lượt xem</li>
                    <li>Xếp hạng</li>
                  </ul>
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
      <div className="channelTile"> 
        <ChannelTile />
      </div>
    </>
  );
};

export default SearchPage;
