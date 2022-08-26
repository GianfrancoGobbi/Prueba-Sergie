export const AGREGAR_PERSONA = "AGREGAR_PERSONA";

export function agregarPersona(input) {
    return {
        type: AGREGAR_PERSONA,
        payload: input
    }
}
