import { IData } from "../editor/ParamEditor.v.1"

export function Header(props: IData) {
    const { name } = props
  
    return (
      <div>
        <div><h2>{name}</h2></div>
      </div>
    )
  }