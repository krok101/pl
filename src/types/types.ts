interface Zone {
  height: number,
  left: number,
  top: number,
  width: number
}

export interface Rectangle {
  id: number,
  timestamp: number,
  duration: number,
  zone: Zone
}
