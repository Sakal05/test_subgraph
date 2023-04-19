import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ProposalEvent } from "../generated/schema"
import { ProposalEvent as ProposalEventEvent } from "../generated/Voting/Voting"
import { handleProposalEvent } from "../src/voting"
import { createProposalEventEvent } from "./voting-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let title = "Example string value"
    let description = "Example string value"
    let monthlyIncentive = BigInt.fromI32(234)
    let newProposalEventEvent = createProposalEventEvent(
      id,
      owner,
      title,
      description,
      monthlyIncentive
    )
    handleProposalEvent(newProposalEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ProposalEvent created and stored", () => {
    assert.entityCount("ProposalEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ProposalEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ProposalEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )
    assert.fieldEquals(
      "ProposalEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "description",
      "Example string value"
    )
    assert.fieldEquals(
      "ProposalEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "monthlyIncentive",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
