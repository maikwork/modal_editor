import React, { useState, useEffect } from 'react';

interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

// Компонент для редактирования параметров
const ParamEditor: React.FC<Props> = ({ params, model }) => {
  const [paramValues, setParamValues] = useState<ParamValue[]>([]);

  // Инициализация начального состояния значений параметров
  useEffect(() => {
    const initialValues: ParamValue[] = params.map(param => {
      const existingValue = model.paramValues.find(pv => pv.paramId === param.id);
  
      return {
        paramId: param.id,
        value: existingValue ? existingValue.value : ''
      };
    });

    setParamValues(initialValues);
  }, [params, model]);

  // Обработчик изменения значений в полях ввода
  const handleChange = (id: number, value: string) => {
    const updatedParamValues = paramValues.map(pv => {
      if (pv.paramId === id) {
        return { ...pv, value };
      }
      return pv;
    });
    setParamValues(updatedParamValues);
  };

  // Метод для получения текущей модели
  const getModel = (): Model => {
    return { paramValues };
  };

  return (
    <div>
      {paramValues.map(paramValue => (
        <div key={paramValue.paramId}>
          <label>
            {params.find(param => param.id === paramValue.paramId)?.name}:
            <input
              type="text"
              value={paramValue.value}
              onChange={(e) => handleChange(paramValue.paramId, e.target.value)}
            />
          </label>
        </div>
      ))}
      <button onClick={() => console.log(getModel())}>Get Model</button>
    </div>
  );
};

export default ParamEditor;