import VideoCard from "../components/VideoCard";
import "../pages/Home.css";
import AdBanner from "../components/AdBanner";
import "../assets/banners/banner-adplaceholder.png";
import Tag from "../components/Tag";
import Header from "../components/Header";
// Dynamically import all images in the 'pictures' folder
const thumbnails = import.meta.glob("../assets/images/thumbnails/*.jpg", {
  eager: true,
}) as Record<string, { default: string }>;

const banners = import.meta.glob("../assets/banners/*.png", {
  eager: true,
}) as Record<string, { default: string }>;

const bannerPath = Object.values(banners)[0].default;
// Extract the image paths
const thumbnailPaths = Object.values(thumbnails).map((img) => img.default);
function Home() {
  return (
    <div className="app">
      <Header />
      <div className="home-container">
        <div className="tag-container">
          <Tag />
        </div>
        <div className="ad-banner">
          <AdBanner bannerSource={bannerPath} />
        </div>
        <div className="home_page">
          {thumbnailPaths.map((src, index) => (
            <VideoCard key={index} thumbnail={src} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
