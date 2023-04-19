import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ProposalEvent,
  TransferTokenForProposalRejection,
  VoteEvent,
  WinningProposalEvent,
  claimIncentiveEvent
} from "../generated/Voting/Voting"

export function createProposalEventEvent(
  id: BigInt,
  owner: Address,
  title: string,
  description: string,
  monthlyIncentive: BigInt
): ProposalEvent {
  let proposalEventEvent = changetype<ProposalEvent>(newMockEvent())

  proposalEventEvent.parameters = new Array()

  proposalEventEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  proposalEventEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  proposalEventEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  proposalEventEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  proposalEventEvent.parameters.push(
    new ethereum.EventParam(
      "monthlyIncentive",
      ethereum.Value.fromUnsignedBigInt(monthlyIncentive)
    )
  )

  return proposalEventEvent
}

export function createTransferTokenForProposalRejectionEvent(
  proposalId: BigInt,
  voters: Address,
  totalTokenTransferred: BigInt
): TransferTokenForProposalRejection {
  let transferTokenForProposalRejectionEvent = changetype<
    TransferTokenForProposalRejection
  >(newMockEvent())

  transferTokenForProposalRejectionEvent.parameters = new Array()

  transferTokenForProposalRejectionEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  transferTokenForProposalRejectionEvent.parameters.push(
    new ethereum.EventParam("voters", ethereum.Value.fromAddress(voters))
  )
  transferTokenForProposalRejectionEvent.parameters.push(
    new ethereum.EventParam(
      "totalTokenTransferred",
      ethereum.Value.fromUnsignedBigInt(totalTokenTransferred)
    )
  )

  return transferTokenForProposalRejectionEvent
}

export function createVoteEventEvent(
  proposalId: BigInt,
  voter: Address,
  voteOption: string,
  message: string
): VoteEvent {
  let voteEventEvent = changetype<VoteEvent>(newMockEvent())

  voteEventEvent.parameters = new Array()

  voteEventEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  voteEventEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  voteEventEvent.parameters.push(
    new ethereum.EventParam("voteOption", ethereum.Value.fromString(voteOption))
  )
  voteEventEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return voteEventEvent
}

export function createWinningProposalEventEvent(
  proposalId: BigInt,
  winningStatus: boolean,
  message: string
): WinningProposalEvent {
  let winningProposalEventEvent = changetype<WinningProposalEvent>(
    newMockEvent()
  )

  winningProposalEventEvent.parameters = new Array()

  winningProposalEventEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  winningProposalEventEvent.parameters.push(
    new ethereum.EventParam(
      "winningStatus",
      ethereum.Value.fromBoolean(winningStatus)
    )
  )
  winningProposalEventEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return winningProposalEventEvent
}

export function createclaimIncentiveEventEvent(
  receiver: Address,
  tokenAmount: BigInt
): claimIncentiveEvent {
  let claimIncentiveEventEvent = changetype<claimIncentiveEvent>(newMockEvent())

  claimIncentiveEventEvent.parameters = new Array()

  claimIncentiveEventEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  claimIncentiveEventEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )

  return claimIncentiveEventEvent
}
