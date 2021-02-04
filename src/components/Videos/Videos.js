import React from 'react';
import './Videos.css'
import SwipeButtons from "../SwipeButtons/SwipeButtons";
import YoutubeVideos from "../YoutubeVideos/YoutubeVideos";

function Videos() {
  return (
    <section className="videos">
      <div className="videos__content">
        <h2 className="videos__title">Видео о нас</h2>
        <SwipeButtons />
        <YoutubeVideos />
      </div>
    </section>
  );
}

export default Videos;
