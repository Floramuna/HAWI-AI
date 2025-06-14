import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface ChatResponse {
  'error' : [] | [string],
  'message' : [] | [Message],
  'success' : boolean,
}
export interface ChatSession {
  'id' : string,
  'topic' : [] | [string],
  'messages' : Array<Message>,
  'userId' : [] | [Principal],
  'createdAt' : bigint,
  'updatedAt' : bigint,
}
export interface CompletedTopic {
  'completedAt' : bigint,
  'score' : [] | [bigint],
  'topicId' : string,
}
export type DifficultyLevel = { 'Beginner' : null } |
  { 'Advanced' : null } |
  { 'Intermediate' : null };
export interface LLMRequest {
  'context' : [] | [string],
  'temperature' : [] | [number],
  'prompt' : string,
  'maxTokens' : [] | [bigint],
}
export interface LLMResponse {
  'content' : string,
  'error' : [] | [string],
  'usage' : [] | [TokenUsage],
}
export interface LearningTopic {
  'id' : string,
  'title' : string,
  'content' : string,
  'difficulty' : DifficultyLevel,
  'createdAt' : bigint,
  'tags' : Array<string>,
  'description' : string,
}
export interface Message {
  'id' : bigint,
  'content' : string,
  'sender' : MessageSender,
  'timestamp' : bigint,
  'sessionId' : string,
}
export type MessageSender = { 'User' : null } |
  { 'Assistant' : null };
export interface Message__1 {
  'id' : bigint,
  'content' : string,
  'sender' : MessageSender,
  'timestamp' : bigint,
  'sessionId' : string,
}
export type Result = { 'ok' : Array<Message__1> } |
  { 'err' : string };
export interface SessionResponse {
  'error' : [] | [string],
  'session' : [] | [ChatSession],
  'success' : boolean,
}
export interface TokenUsage {
  'totalTokens' : bigint,
  'completionTokens' : bigint,
  'promptTokens' : bigint,
}
export interface UserPreferences {
  'difficultyLevel' : DifficultyLevel,
  'language' : string,
  'preferredTopics' : Array<string>,
}
export interface UserProfile {
  'principal' : Principal,
  'createdAt' : bigint,
  'preferences' : UserPreferences,
  'learningProgress' : Array<CompletedTopic>,
  'lastActive' : bigint,
}
export interface _SERVICE {
  'addLearningTopic' : ActorMethod<[LearningTopic], boolean>,
  'askQuestion' : ActorMethod<[string, string], ChatResponse>,
  'createChatSession' : ActorMethod<
    [[] | [Principal], [] | [string]],
    SessionResponse
  >,
  'createUserProfile' : ActorMethod<[Principal, UserPreferences], boolean>,
  'getChatSession' : ActorMethod<[string], SessionResponse>,
  'getLearningTopic' : ActorMethod<[string], [] | [LearningTopic]>,
  'getLearningTopics' : ActorMethod<[], Array<LearningTopic>>,
  'getSessionCount' : ActorMethod<[], bigint>,
  'getSessionMessages' : ActorMethod<[string], Result>,
  'getTopicCount' : ActorMethod<[], bigint>,
  'getUserCount' : ActorMethod<[], bigint>,
  'getUserProfile' : ActorMethod<[Principal], [] | [UserProfile]>,
  'healthCheck' : ActorMethod<[], string>,
  'initializeSampleTopics' : ActorMethod<[], boolean>,
  'processLLMRequest' : ActorMethod<[LLMRequest], LLMResponse>,
  'sendMessage' : ActorMethod<[string, string, MessageSender], ChatResponse>,
  'updateUserProfile' : ActorMethod<[Principal, UserPreferences], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
