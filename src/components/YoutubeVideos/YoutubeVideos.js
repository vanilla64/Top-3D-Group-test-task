import React from 'react';
import './YoutubeVideos.css'

function YoutubeVideos() {
  return (
    <ul className="youtube-videos">
      <li>
        <iframe
          width="557" height="323"
          src="https://www.youtube.com/embed/OYFOWAL1NlA" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </li>
      <li>
        <iframe
          width="557" height="323"
          src="https://www.youtube.com/embed/SOYBsly_yN8" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </li>
    </ul>
  );
}

export default YoutubeVideos;
