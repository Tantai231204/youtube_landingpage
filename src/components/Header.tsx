import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MicIcon from "@mui/icons-material/Mic";
import YouTubeIcon from "@mui/icons-material/YouTube";
import image from "../assets/Youtube_Icon_-_Download_Free_Vector_PNG-removebg-preview.png";
import Sidebar from "./sidebar/Sidebar";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "../components/Header.css";
import DropdownProfile from "./DropdownProfile";
import { useNavigate } from "react-router-dom";
const style: React.CSSProperties = {
  color: "white",
  cursor: "pointer",
};
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  // window.addEventListener('resize',toggleMenu);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };
  return (
    <div className="parrent-header">
      <div className="header">
        <div className="header__left">
          <div onClick={toggleMenu}>
            <MenuIcon sx={{ color: "white", marginLeft: "14px" }} />
          </div>
          <img src={image} style={{ width: "58px" }} alt="youtube img" />
        </div>
        <div className="header_input">
          <div className="header__middle">
            <input
              style={{ color: "white" }}
              className="SearchInput"
              placeholder="Tìm kiếm"
              type="text"
              onFocus={(e) => {
                e.currentTarget.style.width = "415px";
                e.currentTarget.style.maxWidth = "600px";
                e.currentTarget.style.boxShadow =
                  "0 1px 6px rgba(32,33,36,0.28)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.maxWidth = "200px";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "scale(1)";
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon
              onClick={handleSearch}
              sx={{ color: "white" }}
              className="header_searchBtn"
            />
          </div>
          <MicIcon
            sx={{
              ...style,
              backgroundColor: "#272727",
              borderRadius: "50%",
              height: "1.8rem",
              width: "1.8rem",
            }}
          />
        </div>
        <div className="header__right">
          <VideoCallIcon sx={{ ...style }} />
          <AppsIcon sx={{ ...style }} />
          <NotificationsIcon sx={{ ...style }} />
          <DropdownProfile />
        </div>
      </div>
      {!isOpen ? (
        <div className="sidebar">
          <Sidebar isBigTitle={false} Icon={HomeIcon} title="Trang chủ" />
          <Sidebar
            isBigTitle={false}
            Icon={SlideshowOutlinedIcon}
            title="Shorts"
          />
          <Sidebar
            isBigTitle={false}
            Icon={SubscriptionsOutlinedIcon}
            title="Kênh đăng ký"
          />
          <hr />
          <Sidebar
            isBigTitle={true}
            Icon={ArrowForwardIosOutlinedIcon}
            title="Bạn"
          />
          <Sidebar
            isBigTitle={false}
            Icon={HistoryOutlinedIcon}
            title="Video đã xem"
          />
          <Sidebar
            isBigTitle={false}
            Icon={PlaylistPlayOutlinedIcon}
            title="Danh sách phát"
          />
          <Sidebar
            isBigTitle={false}
            Icon={WatchLaterOutlinedIcon}
            title="Xem sau"
          />
          <Sidebar
            isBigTitle={false}
            Icon={ThumbUpOutlinedIcon}
            title="Video đã thích"
          />
          <Sidebar
            isBigTitle={false}
            Icon={FileDownloadOutlinedIcon}
            title="Nội dung đã tải xuống"
          />
          <hr />
          <Sidebar isBigTitle={true} Icon={null} title="Khám phá" />
          <Sidebar
            isBigTitle={false}
            Icon={WhatshotOutlinedIcon}
            title="Thịnh hành"
          />
          <Sidebar
            isBigTitle={false}
            Icon={MusicNoteOutlinedIcon}
            title="Âm nhạc"
          />
          <Sidebar
            isBigTitle={false}
            Icon={VideogameAssetOutlinedIcon}
            title="Trò chơi"
          />
          <Sidebar
            isBigTitle={false}
            Icon={NewspaperOutlinedIcon}
            title="Tin tức"
          />
          <Sidebar
            isBigTitle={false}
            Icon={EmojiEventsOutlinedIcon}
            title="Thể thao"
          />
          <hr />
          <Sidebar
            isBigTitle={true}
            Icon={null}
            title="Dịch vụ khác của YouTube"
          />
          <Sidebar
            isBigTitle={false}
            Icon={YouTubeIcon}
            title="YouTube Premium"
          />
          <Sidebar
            isBigTitle={false}
            Icon={PlayCircleIcon}
            title="YouTube music"
          />
          <hr />
          <Sidebar
            isBigTitle={false}
            Icon={SettingsOutlinedIcon}
            title="Cài đặt"
          />
          <Sidebar
            isBigTitle={false}
            Icon={OutlinedFlagOutlinedIcon}
            title="Nhật ký báo cáo"
          />
          <Sidebar
            isBigTitle={false}
            Icon={HelpOutlineOutlinedIcon}
            title="Trợ giúp"
          />
          <Sidebar
            isBigTitle={false}
            Icon={ReportGmailerrorredOutlinedIcon}
            title="YouTube music"
          />
          <hr />
          <p>
            Giới thiệu Báo chí Bản quyền <br />
            Liên hệ với chúng tôi <br />
            Người sáng tạoQuảng cáo <br />
            Nhà phát triển <br />
            Điều khoảnQuyền riêng tư <br />
            Chính sách và an toàn <br />
            Cách YouTube hoạt động <br />
            Thử các tính năng mới <br />
            <span>© 2025 Google LLC</span>
          </p>
        </div>
      ) : (
        <div className="sidebar_mini">
          <div className="content_miniSidebar">
            <HomeIcon sx={{ background: "none" }} />
            <h2>Trang chủ</h2>
          </div>
          <div className="content_miniSidebar">
            <SlideshowOutlinedIcon sx={{ background: "none" }} />
            <h2>Shorts</h2>
          </div>
          <div className="content_miniSidebar">
            <SubscriptionsOutlinedIcon sx={{ background: "none" }} />
            <h2>Kênh đăng ký</h2>
          </div>
          <div className="content_miniSidebar">
            <AccountCircleOutlinedIcon sx={{ background: "none" }} />
            <h2>Trang chủ</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
