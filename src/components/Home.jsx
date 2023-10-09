import React from "react";

function Home() {
  return (
    <div>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="text-over-video">
        <h1>Welcome to Coin.New</h1>
        <p>Coin New...</p>
      </div>
    </div>
  );
}

export default Home;
