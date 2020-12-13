export const UPDATE_CELL = "UPDATE_CELL";

interface UpdateCellAction {
  type: typeof UPDATE_CELL;
  payload: IActionPayload;
}

export type CatalogActionTypes = UpdateCellAction;
