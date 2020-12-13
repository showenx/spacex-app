import { UPDATE_CELL } from "./types";

const initialState: CapsuleState = {
  capsules: [
    {
      capsule_serial: "C101",
      capsule_id: "dragon1",
      status: "retired",
      original_launch: "2010-12-08T15:43:00.000Z",
      original_launch_unix: 1291822980,
      landings: 1,
      type: "Dragon 1.0",
      details: "Reentered after three weeks in orbit",
      reuse_count: 0,
    },
    {
      capsule_serial: "C102",
      capsule_id: "dragon1",
      status: "retired",
      original_launch: "2012-05-22T07:44:00.000Z",
      original_launch_unix: 1335944640,
      landings: 1,
      type: "Dragon 1.0",
      details: "First Dragon spacecraft",
      reuse_count: 0,
    },
    {
      capsule_serial: "C103",
      capsule_id: "dragon1",
      status: "unknown",
      original_launch: "2012-10-08T00:35:00.000Z",
      original_launch_unix: 1349656500,
      landings: 1,
      type: "Dragon 1.0",
      details: "First of twenty missions flown under the CRS1 contract",
      reuse_count: 0,
    },
    {
      capsule_serial: "C104",
      capsule_id: "dragon1",
      status: "unknown",
      original_launch: "2013-03-01T19:10:00.000Z",
      original_launch_unix: 1362165000,
      landings: 1,
      type: "Dragon 1.0",
      details: "",
      reuse_count: 0,
    },
    {
      capsule_serial: "C105",
      capsule_id: "dragon1",
      status: "unknown",
      original_launch: "2014-04-18T19:25:00.000Z",
      original_launch_unix: 1397849100,
      landings: 1,
      type: "Dragon 1.1",
      details: "First Dragon v1.1 capsule",
      reuse_count: 0,
    },
    {
      capsule_serial: "C106",
      capsule_id: "dragon1",
      status: "active",
      original_launch: "2014-09-21T05:52:00.000Z",
      original_launch_unix: 1411278720,
      landings: 3,
      type: "Dragon 1.1",
      details: "First Dragon capsule to be reused",
      reuse_count: 2,
    },
  ],
};

const catalogReducer = (
  state = initialState,
  action: CapsuleAction
): CapsuleState => {
  switch (action.type) {
    case UPDATE_CELL:
      console.log("state", state);

      const index = state.capsules.findIndex(
        capsule => capsule.capsule_serial === action.payload.key
      );

      return {
        ...state,
        capsules: state.capsules.map((capsule, i) => {
          if (i === index) {
            const changedCell: IDynamicObject = {};
            changedCell[action.payload.fieldName] = action.payload.fieldValue;

            return {
              ...capsule,
              ...changedCell,
            };
          } else {
            return capsule;
          }
        }),
      };
    default:
      return state;
  }
};

export default catalogReducer;
