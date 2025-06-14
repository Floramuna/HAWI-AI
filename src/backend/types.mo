import Time "mo:base/Time";
import Principal "mo:base/Principal";

module Types {
    
    // Message types for chat
    public type Message = {
        id: Nat;
        content: Text;
        sender: MessageSender;
        timestamp: Int;
        sessionId: Text;
    };
    
    public type MessageSender = {
        #User;
        #Assistant;
    };
    
    // Chat session management
    public type ChatSession = {
        id: Text;
        userId: ?Principal;
        messages: [Message];
        createdAt: Int;
        updatedAt: Int;
        topic: ?Text;
    };
    
    // Learning content types
    public type LearningTopic = {
        id: Text;
        title: Text;
        description: Text;
        difficulty: DifficultyLevel;
        content: Text;
        tags: [Text];
        createdAt: Int;
    };
    
    public type DifficultyLevel = {
        #Beginner;
        #Intermediate;
        #Advanced;
    };
    
    // User profile for personalization
    public type UserProfile = {
        principal: Principal;
        preferences: UserPreferences;
        learningProgress: [CompletedTopic];
        createdAt: Int;
        lastActive: Int;
    };
    
    public type UserPreferences = {
        preferredTopics: [Text];
        difficultyLevel: DifficultyLevel;
        language: Text;
    };
    
    public type CompletedTopic = {
        topicId: Text;
        completedAt: Int;
        score: ?Nat;
    };
    
    // API Response types
    public type ChatResponse = {
        success: Bool;
        message: ?Message;
        error: ?Text;
    };
    
    public type SessionResponse = {
        success: Bool;
        session: ?ChatSession;
        error: ?Text;
    };
    
    public type TopicsResponse = {
        success: Bool;
        topics: [LearningTopic];
        error: ?Text;
    };
    
    // LLM Integration types
    public type LLMRequest = {
        prompt: Text;
        context: ?Text;
        maxTokens: ?Nat;
        temperature: ?Float;
    };
    
    public type LLMResponse = {
        content: Text;
        usage: ?TokenUsage;
        error: ?Text;
    };
    
    public type TokenUsage = {
        promptTokens: Nat;
        completionTokens: Nat;
        totalTokens: Nat;
    };
}