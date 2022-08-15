import { useEffect, useRef} from 'react';
import { Film } from '../../types/films';

type VideoPlayerProps = {
    film: Film;
}

export default function VideoPlayer (props: VideoPlayerProps): JSX.Element {
  const {film} = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setTimeout(() => videoRef.current?.play(), 1000);
  });

  return (
    <video
      key={film.id}
      ref={videoRef}
      src={film.previewVideoLink}
      muted
      poster={film.previewImage}
      width={260.75}
    >
    </video>
  );
}
