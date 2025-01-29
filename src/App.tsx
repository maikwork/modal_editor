import { BaseModal as BaseModalV1 } from "./widget/BaseModal.v.1"
import { BaseModal as BaseModalV2 } from "./widget/BaseModal.v.2"

function App() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', gap: '15px'}}>
      <BaseModalV1 />
      <BaseModalV2 />
    </div>
  )
}

export default App
