import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Preloader from '../../components/preloader/preloader';
import { useAppSelector } from '../../hooks';

export default function Player(): JSX.Element {
  const {id} = useParams();
  const {films} = useAppSelector((state) => state);
  const film = films.find((e) => String(e.id) === id);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [togglerPos, setTogglerPos] = useState(0);

  const getFilmTime = (seconds: number | undefined): string => {
    if (seconds) {
      return seconds >= 3600
        ? new Date(Math.trunc(seconds) * 1000).toISOString().substring(11, 19)
        : new Date(Math.trunc(seconds) * 1000).toISOString().substring(14, 19);
    }
    return '00:00';
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video === null) {
      return;
    }

    const updateTogglerPos = () => {
      if (video !== null) {
        setTogglerPos(video.currentTime / video.duration * 100);
      }
      if (video?.ended) {
        setIsPlaying(false);
      }
    };

    const addIsLoading = () => setIsLoading(true);
    const removeIsLoading = () => setIsLoading(false);

    video.addEventListener('timeupdate', updateTogglerPos);
    video.addEventListener('loadstart', addIsLoading);
    video.addEventListener('canplay', removeIsLoading);

    if (isPlaying) {
      video.play() ;
      video.muted = false;
      return;
    }

    video.pause();

    return () => {
      if (video === null) { return; }
      video.addEventListener('timeupdate', updateTogglerPos);
      video.addEventListener('loadstart', addIsLoading);
      video.addEventListener('canplay', removeIsLoading);
    };

  }, [videoRef, isPlaying, film, isLoading]);

  const video = videoRef.current;
  return (
    <div className="player">
      {isLoading && <Preloader />}
      <video ref={videoRef} src={film?.videoLink} className="player__video" poster={film?.backgroundImage}></video>

      <button onClick={() => navigate(-1)} type="button" className="player__exit">
         Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={togglerPos}
              max="100"
            >
            </progress>
            <div className="player__toggler" style={{ left: `${togglerPos}%`}}>
               Toggler
            </div>
          </div>
          <div className="player__time-value">     {
            video
              ? getFilmTime(video.duration - video.currentTime)
              : '00:00:00'
          }
          </div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {
              isPlaying
                ?
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                :
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
            }
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">{film?.name}</div>

          <button type="button" className="player__full-screen" onClick={() => video?.requestFullscreen()}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

