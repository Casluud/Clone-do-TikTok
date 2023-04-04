import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{ name }</h3>
        <p>{ description }</p>
        <div className="rapazinhodamusica">
          <MusicNoteIcon className="videofooter__icon" />
          <div className="videofooterMusic__text">
            <p>{ music }</p>
          </div>
        </div>
      </div>
      <img
        className="disquinho"
        alt="imagem de um disco girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
