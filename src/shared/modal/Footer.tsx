import { IData } from "../editor/ParamEditor.v.1";

export function Footer(props: IData) { 
  console.log('For posterity: ', props)

  return (
    <div>
      <button>Закрыть</button>
      <button>Сохранить</button>
    </div>
  )
}