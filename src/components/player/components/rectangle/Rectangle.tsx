interface Props {
  currentTime: number
  duration: number
  timestamp: number
  zone: {
    left: number
    top: number
    width: number
    height: number
  }
}

const Rectangle = ({duration, timestamp, zone, currentTime}: Props) => {
  if (currentTime >= timestamp && currentTime <= timestamp + duration)
    return <div style={{
      ...zone,
      position: 'absolute'
    }}></div>
  return null
}

export default Rectangle