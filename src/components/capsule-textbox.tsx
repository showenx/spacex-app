import * as React from "react";

type Props = {
  cell: IActionPayload;
  updateCell: (payload: IActionPayload) => void;
};

export const CapsuleTextBox: React.FC<Props> = ({ cell, updateCell }) => {
  const handleChange = (e: any) => {
    updateCell({
      key: cell.key,
      fieldName: cell.fieldName,
      fieldValue: e.target.value,
    });
  };
  return <input type="text" value={cell.fieldValue} onChange={handleChange} />;
};
