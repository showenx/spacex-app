import { expect } from "chai";
import catalogReducer from "../src/store/reducers";
import { updateCellAction } from "../src/store/actions";

describe("Spacex capsule catalog state management tests", () => {
  const testState = {
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
    ],
  };

  it("Update 1st item 'detail' field", () => {
    let action = updateCellAction({
      key: "C101",
      fieldName: "details",
      fieldValue: "test 123",
    });

    let result = catalogReducer(testState, action);

    expect(result).to.eql({
      capsules: [
        {
          capsule_serial: "C101",
          capsule_id: "dragon1",
          status: "retired",
          original_launch: "2010-12-08T15:43:00.000Z",
          original_launch_unix: 1291822980,
          landings: 1,
          type: "Dragon 1.0",
          details: "test 123",
          reuse_count: 0,
        },
      ],
    });
  });

  it("Update 1st item 'type' field", () => {
    let action = updateCellAction({
      key: "C101",
      fieldName: "type",
      fieldValue: "Dragon 999",
    });

    let result = catalogReducer(testState, action);

    expect(result).to.eql({
      capsules: [
        {
          capsule_serial: "C101",
          capsule_id: "dragon1",
          status: "retired",
          original_launch: "2010-12-08T15:43:00.000Z",
          original_launch_unix: 1291822980,
          landings: 1,
          type: "Dragon 999",
          details: "Reentered after three weeks in orbit",
          reuse_count: 0,
        },
      ],
    });
  });

  it("Update 1st item 'status' field", () => {
    let action = updateCellAction({
      key: "C101",
      fieldName: "status",
      fieldValue: "ready",
    });

    let result = catalogReducer(testState, action);

    expect(result).to.eql({
      capsules: [
        {
          capsule_serial: "C101",
          capsule_id: "dragon1",
          status: "ready",
          original_launch: "2010-12-08T15:43:00.000Z",
          original_launch_unix: 1291822980,
          landings: 1,
          type: "Dragon 1.0",
          details: "Reentered after three weeks in orbit",
          reuse_count: 0,
        },
      ],
    });
  });
});
