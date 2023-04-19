import {
  ProposalEvent as ProposalEventEvent,
  TransferTokenForProposalRejection as TransferTokenForProposalRejectionEvent,
  VoteEvent as VoteEventEvent,
  WinningProposalEvent as WinningProposalEventEvent,
  claimIncentiveEvent as claimIncentiveEventEvent
} from "../generated/Voting/Voting"
import {
  ProposalEvent,
  TransferTokenForProposalRejection,
  VoteEvent,
  WinningProposalEvent,
  claimIncentiveEvent
} from "../generated/schema"

export function handleProposalEvent(event: ProposalEventEvent): void {
  let entity = new ProposalEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Voting_id = event.params.id
  entity.owner = event.params.owner
  entity.title = event.params.title
  entity.description = event.params.description
  entity.monthlyIncentive = event.params.monthlyIncentive

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferTokenForProposalRejection(
  event: TransferTokenForProposalRejectionEvent
): void {
  let entity = new TransferTokenForProposalRejection(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.voters = event.params.voters
  entity.totalTokenTransferred = event.params.totalTokenTransferred

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoteEvent(event: VoteEventEvent): void {
  let entity = new VoteEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.voter = event.params.voter
  entity.voteOption = event.params.voteOption
  entity.message = event.params.message

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWinningProposalEvent(
  event: WinningProposalEventEvent
): void {
  let entity = new WinningProposalEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.winningStatus = event.params.winningStatus
  entity.message = event.params.message

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleclaimIncentiveEvent(
  event: claimIncentiveEventEvent
): void {
  let entity = new claimIncentiveEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.receiver = event.params.receiver
  entity.tokenAmount = event.params.tokenAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
