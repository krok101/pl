import { useRef } from "react"

interface Props {
  src: string
}

const Player = ({src}: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
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
  return (
    <video ref={videoRef} src={src} onClick={onPlayOrPause}></video>
  )
}

export default Player