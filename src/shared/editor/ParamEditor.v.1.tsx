import React from "react"

// Честно это ужас какой-то, а не структура с ней не просто о расширяемости можно забыть, но и однопоточном мозге 
type TUID = string

export interface IData {
  id: TUID
  name: string
}

interface IDataWithType<T> {
  data: IData
  type: T
}

interface IProps<T extends string> {
  elements: IDataWithType<T>[]
  renderTypes: Record<T, (el: IData) => React.ReactElement>
}

export function ParamEditor<T extends string>(params: IProps<T>) {
  const { elements, renderTypes } = params

  return (
    <div style={{ border: '1px solid blue'}}>
      {elements.map((el) => renderTypes[el.type](el.data))}
    </div>
  )
}