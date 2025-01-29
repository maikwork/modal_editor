import { IData } from "../editor/ParamEditor.v.1"

export function InputTel(props: IData) {
  const { name } = props

  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <div>{name}</div>
      <input type='tel' />
    </div>
  )
}