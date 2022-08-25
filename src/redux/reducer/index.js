
import { PERSONAS } from '../actions/index';

const initialState = {
  personas:
    [{
      nombre: "Pedro",
      edad: 20,
      carrera: "Ingeniería",
      hobbie: "Futbol"
    },
    {
      nombre: "Rodrigo",
      edad: 22,
      carrera: "Arquitectura",
      hobbie: "Bajo eléctrico"
    },
    {
      nombre: "Romina",
      edad: 21,
      carrera: "Abogacía",
      hobbie: "Acrobacia"
    },
    {
      nombre: "Ana",
      edad: 23,
      carrera: "Contadora",
      hobbie: "Astronomía"
    }
    ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSONAS:
      return {
        ...state,
        personas: action.payload,
      };
      default:
        return state;
  };
}
export default rootReducer;
