interface ICapsule {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  original_launch_unix: number;
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
}

interface IDynamicObject {
  [key: string]: any;
}

interface IActionPayload {
  key: string;
  fieldName: string;
  fieldValue: string;
}

type CapsuleState = {
  capsules: ICapsule[];
};

type CapsuleAction = {
  type: string;
  payload: IActionPayload;
};

type DispatchType = (args: CapsuleAction) => CapsuleAction;
