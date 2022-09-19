import { Content } from 'antd/lib/layout/layout'
import { useEffect, useRef } from 'react'
import { Player as PlayerComponent, RectanglesList } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { FETCH_RECTANGLES_DATA, FETCH_VIDEO_SRC } from '../../store/actions'

const Player = () => {
  const { videoSrc, rectangles } = useAppSelector(store => store)
  const dispatch = useAppDispatch()
  const video = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    dispatch({type: FETCH_RECTANGLES_DATA})
    dispatch({type: FETCH_VIDEO_SRC})
  }, [])

  const onClickByPosition = (start: number) => {
    if (video.current)
      video.current.currentTime = start
  }

  return (
    <Content>
      {!videoSrc && rectangles ? '...loading' : (
        <>
          <PlayerComponent src={videoSrc} rectangles={rectangles} start={0} videoRef={video}/>
          <RectanglesList onClickByPosition={onClickByPosition}/>
        </>
      )}
    </Content>
  )
}

export default Player
