import { ParamEditor } from "../shared/editor/ParamEditor.v.2";
import { InputTel } from "../shared/modal/InputTel";
import { InputText } from "../shared/modal/InputText";

export function BaseModal() {
    return (
      <ParamEditor
        header={() => <div><h2>Header V2</h2></div>}
        footer={() => (
          <div>
            <button>Закрыть</button>
            <button>Отправить</button>
          </div>
        )}
        contents={[
          {data: {id: '1', name: 'name 1'}, type: 'string'},
          {data: {id: '2', name: 'name 2'}, type: 'tel'},
        ]}
        renderTypes={{
          'tel': InputTel,
          'string': InputText,
        }}
      />
    )
  }