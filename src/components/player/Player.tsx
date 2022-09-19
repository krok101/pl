import { useState } from 'react'
import { Rectangle as RC } from '../../types/types'
import Rectangle from './components/rectangle/Rectangle'

interface Props {
  src: string,
  rectangles: RC[],
  start: number,
  videoRef: any
}

const Player = ({src, rectangles, start, videoRef}: Props) => {
  const [currentTime, setCurrentTime] = useState(start)
  const isVideoPlaying = (video:HTMLVideoElement):boolean => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)

  const onPlayOrPause = () => {
    const {current: video} = videoRef
    if (!video) return 

    if (isVideoPlaying(video)) {
      video.pause()
    } else {
      video.play()
    }
  }
  const onTimeUpdate = () => {
    setCurrentTime(videoRef.current?.currentTime! * 1000 ?? 0)
  }
  return (
    <>
      {rectangles?.map((rectangle: RC) => (
        <Rectangle
          key={rectangle.id}
          rectangle={rectangle}
          currentTime={currentTime}
        />
      ))}
      <video
        onTimeUpdate={() => onTimeUpdate()}
        ref={videoRef}
        src={src}
        onClick={onPlayOrPause}>
      </video>
    </>
  )
}

export default Player
