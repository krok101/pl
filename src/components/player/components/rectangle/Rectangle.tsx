import { Rectangle as RC} from '../../../../types/types'

interface Props {
  currentTime: number
  rectangle: RC
}

const Rectangle = ({rectangle, currentTime}: Props) => {
  const { timestamp, zone, duration } = rectangle
  if (currentTime >= timestamp && currentTime <= timestamp + duration) {
    return <div style={{
        ...zone,
        position: 'absolute',
        background: 'green'
      }}></div>
  }
  return null
}

export default Rectangle
