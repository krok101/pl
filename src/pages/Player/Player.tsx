import { Content } from "antd/lib/layout/layout"
import { useEffect } from "react"
import { Player as PlayerComponent } from "../../components"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { setVideoSrc, setRectangles } from "../../store/actionsCreators"

const Player = () => {
  const { videoSrc } = useAppSelector(store => store)
  const dispatch = useAppDispatch()

  const getVideoSrc = () => {
    setTimeout(() => {
      dispatch(setVideoSrc('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'))
    }, 1000)
  }

  useEffect(() => {
    getVideoSrc()
    console.log('+1')
    dispatch({type: 'FETCH_RECTANGLES_DATA'})
  }, [])

  return (
    <Content>
      {!videoSrc ? '...loading' : <PlayerComponent src={videoSrc} />}
    </Content>
  )
}

export default Player