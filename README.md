# ModalEditor

Изначальная задумка автора была очень сложна для понимания, так что пришлось чуть-чуть подхемичить и по ключевым словам: ЛЕГКО РАСШИРЯЕМО, ВЫВОДИТЬ, ОБЩИЕ ДАННЫЕ. И из этого я сделал вывод, что это про движок создания модалок.

## Рефакторинг

### Причины
Как писал ранее та форма даных и описания задачи оказалась мне не подвластна, слишком был умен тот человек, что смысл слов смог зашифравать.
![Данные](./img/Снимок%20экрана%202025-01-30%20в%2003.33.20.png)
Из это структуры данные, которую я описал, увидел несколько проблемм:
1) Высокая связанность типов
2) Не понятно что такое Color[]
3) и ужастная архитекутра, которая запустила eventloop в голове

### Что сделанно
Мной была предложена эффективная структура хранения данные в проекте. Она берет все лучшее из FSD, но с дополнением ввиде папки trash, там обычно хранится очень нужное, о чем должен молчать chatGPT.
Код был написан по лучшим современным стандартам, так что tsx по умолнчанию стоит.
```
src
--shared
----editor // Логика "движка"
----modal // комопненты для блоков
--trash
--widget
...
```
Изменил типы, теперь они такие
```ts
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

```
А с движком произошла магия
![Данные](https://c.tenor.com/j2hNq288VcAAAAAd/shia-labeouf-magic.gif)
 <br />**все старое должно быть забыло, а все новое добавленно** - цитаты великих людей. 

У движка есть две реализации: <br />
V1
```tsx
export function ParamEditor<T extends string>(params: IProps<T>) {
  const { elements, renderTypes } = params

  return (
    <div style={{ border: '1px solid blue'}}>
      {elements.map((el) => renderTypes[el.type](el.data))}
    </div>
  )
}
```
V2
```tsx
export function ParamEditor<T extends string>(params: IProps<T>) {
  const { contents, renderTypes, header, footer } = params

  return (
    <div style={{ border: '1px solid green'}}>
      {header()}
      <div>
        {contents.map((el) => renderTypes[el.type](el.data))}
      </div>
      {footer()}
    </div>
  )
}
```
### Результат
И как же это выглядит, а вот так: <br />
V1
```jsx
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
```
V2
```js
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
```
## Итор
### Результат запущенного проекта
![модалки](./img/Снимок%20экрана%202025-01-30%20в%2003.27.22.png)
### P.S
Проект можно было бы усложнить и сделать его еще более универсильным, но мне не хотело его раздрувать до ракет уровня SpaceX, а то так и до тильды уже не долеко
### P.S.S
Простите мою сумбурность в тексте, посторался сделаеть его веселым и для себя, если мы не будем себя радовать, то будем все время груститьЮ

# КОНЕЦ
