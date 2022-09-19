import getTime from "../../helpers/getTime"
import { useAppSelector } from "../../hooks/redux"
import {Rectangle} from "../../types/types"

interface Props {
  onClickByPosition: (start: number) => void
}
const RectanglesList = ({onClickByPosition}: Props) => {
  const { rectangles } = useAppSelector(store => store)


  return (
    <ul>
      {rectangles?.sort((a:Rectangle, b:Rectangle) => a.timestamp - b.timestamp).map((rectangle: Rectangle) => (
        <li key={rectangle.id}>
          <button onClick={() => onClickByPosition(rectangle.timestamp / 1000)}>{getTime(rectangle.timestamp)}</button>
        </li>
      ))}
    </ul>
  )
}

export default RectanglesList