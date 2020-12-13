import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { CapsuleTextBox } from "./capsule-textbox";

type Props = {
  capsule: ICapsule;
  updateCell: (payload: IActionPayload) => void;
};

export const CapsuleCatalog: React.FC<Props> = ({ capsule, updateCell }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const onCellUpdate = React.useCallback(
    (payload: IActionPayload) => dispatch(updateCell(payload)),
    [dispatch, updateCell]
  );

  return (
    <div className="row">
      <span>{capsule.capsule_serial}</span>
      <CapsuleTextBox
        cell={{
          key: capsule.capsule_serial,
          fieldName: "type",
          fieldValue: capsule.type,
        }}
        updateCell={onCellUpdate}
      />
      <CapsuleTextBox
        cell={{
          key: capsule.capsule_serial,
          fieldName: "details",
          fieldValue: capsule.details,
        }}
        updateCell={onCellUpdate}
      />
      <CapsuleTextBox
        cell={{
          key: capsule.capsule_serial,
          fieldName: "status",
          fieldValue: capsule.status,
        }}
        updateCell={onCellUpdate}
      />
    </div>
  );
};
