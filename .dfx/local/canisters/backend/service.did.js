export const idlFactory = ({ IDL }) => {
  const DifficultyLevel = IDL.Variant({
    'Beginner' : IDL.Null,
    'Advanced' : IDL.Null,
    'Intermediate' : IDL.Null,
  });
  const LearningTopic = IDL.Record({
    'id' : IDL.Text,
    'title' : IDL.Text,
    'content' : IDL.Text,
    'difficulty' : DifficultyLevel,
    'createdAt' : IDL.Int,
    'tags' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
  });
  const MessageSender = IDL.Variant({
    'User' : IDL.Null,
    'Assistant' : IDL.Null,
  });
  const Message = IDL.Record({
    'id' : IDL.Nat,
    'content' : IDL.Text,
    'sender' : MessageSender,
    'timestamp' : IDL.Int,
    'sessionId' : IDL.Text,
  });
  const ChatResponse = IDL.Record({
    'error' : IDL.Opt(IDL.Text),
    'message' : IDL.Opt(Message),
    'success' : IDL.Bool,
  });
  const ChatSession = IDL.Record({
    'id' : IDL.Text,
    'topic' : IDL.Opt(IDL.Text),
    'messages' : IDL.Vec(Message),
    'userId' : IDL.Opt(IDL.Principal),
    'createdAt' : IDL.Int,
    'updatedAt' : IDL.Int,
  });
  const SessionResponse = IDL.Record({
    'error' : IDL.Opt(IDL.Text),
    'session' : IDL.Opt(ChatSession),
    'success' : IDL.Bool,
  });
  const UserPreferences = IDL.Record({
    'difficultyLevel' : DifficultyLevel,
    'language' : IDL.Text,
    'preferredTopics' : IDL.Vec(IDL.Text),
  });
  const Message__1 = IDL.Record({
    'id' : IDL.Nat,
    'content' : IDL.Text,
    'sender' : MessageSender,
    'timestamp' : IDL.Int,
    'sessionId' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Vec(Message__1), 'err' : IDL.Text });
  const CompletedTopic = IDL.Record({
    'completedAt' : IDL.Int,
    'score' : IDL.Opt(IDL.Nat),
    'topicId' : IDL.Text,
  });
  const UserProfile = IDL.Record({
    'principal' : IDL.Principal,
    'createdAt' : IDL.Int,
    'preferences' : UserPreferences,
    'learningProgress' : IDL.Vec(CompletedTopic),
    'lastActive' : IDL.Int,
  });
  const LLMRequest = IDL.Record({
    'context' : IDL.Opt(IDL.Text),
    'temperature' : IDL.Opt(IDL.Float64),
    'prompt' : IDL.Text,
    'maxTokens' : IDL.Opt(IDL.Nat),
  });
  const TokenUsage = IDL.Record({
    'totalTokens' : IDL.Nat,
    'completionTokens' : IDL.Nat,
    'promptTokens' : IDL.Nat,
  });
  const LLMResponse = IDL.Record({
    'content' : IDL.Text,
    'error' : IDL.Opt(IDL.Text),
    'usage' : IDL.Opt(TokenUsage),
  });
  return IDL.Service({
    'addLearningTopic' : IDL.Func([LearningTopic], [IDL.Bool], []),
    'askQuestion' : IDL.Func([IDL.Text, IDL.Text], [ChatResponse], []),
    'createChatSession' : IDL.Func(
        [IDL.Opt(IDL.Principal), IDL.Opt(IDL.Text)],
        [SessionResponse],
        [],
      ),
    'createUserProfile' : IDL.Func(
        [IDL.Principal, UserPreferences],
        [IDL.Bool],
        [],
      ),
    'getChatSession' : IDL.Func([IDL.Text], [SessionResponse], []),
    'getLearningTopic' : IDL.Func([IDL.Text], [IDL.Opt(LearningTopic)], []),
    'getLearningTopics' : IDL.Func([], [IDL.Vec(LearningTopic)], []),
    'getSessionCount' : IDL.Func([], [IDL.Nat], []),
    'getSessionMessages' : IDL.Func([IDL.Text], [Result], []),
    'getTopicCount' : IDL.Func([], [IDL.Nat], []),
    'getUserCount' : IDL.Func([], [IDL.Nat], []),
    'getUserProfile' : IDL.Func([IDL.Principal], [IDL.Opt(UserProfile)], []),
    'healthCheck' : IDL.Func([], [IDL.Text], []),
    'initializeSampleTopics' : IDL.Func([], [IDL.Bool], []),
    'processLLMRequest' : IDL.Func([LLMRequest], [LLMResponse], []),
    'sendMessage' : IDL.Func(
        [IDL.Text, IDL.Text, MessageSender],
        [ChatResponse],
        [],
      ),
    'updateUserProfile' : IDL.Func(
        [IDL.Principal, UserPreferences],
        [IDL.Bool],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
