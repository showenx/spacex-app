import { UPDATE_CELL, CatalogActionTypes } from "./types";

export function updateCellAction(newValue: IActionPayload): CatalogActionTypes {
  return {
    type: UPDATE_CELL,
    payload: newValue,
  };
}
