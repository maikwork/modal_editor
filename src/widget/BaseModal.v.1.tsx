import { ParamEditor } from "../shared/editor/ParamEditor.v.1";
import { Footer } from "../shared/modal/Footer";
import { Header } from "../shared/modal/Header";
import { InputTel } from "../shared/modal/InputTel";
import { InputText } from "../shared/modal/InputText";

export function BaseModal() {
    return (
      <ParamEditor 
        elements={[
          {data: {id: '1', name: 'Header V1'}, type: 'header'},
          {data: {id: '1', name: 'name 1'}, type: 'string'},
          {data: {id: '2', name: 'name 2'}, type: 'tel'},
          {data: {id: '1', name: 'Footer'}, type: 'footer'},
        ]}
        renderTypes={{
          'tel': InputTel,
          'string': InputText,
          'header': Header,
          'footer': Footer
        }}
      />
    )
  }