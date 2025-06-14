import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import Debug "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Nat "mo:base/Nat";
import Random "mo:base/Random";
import Int "mo:base/Int";

import Types "types";

actor HawiBackend {
    
    // Type aliases for cleaner code
    type Message = Types.Message;
    type ChatSession = Types.ChatSession;
    type LearningTopic = Types.LearningTopic;
    type UserProfile = Types.UserProfile;
    type ChatResponse = Types.ChatResponse;
    type SessionResponse = Types.SessionResponse;
    type LLMRequest = Types.LLMRequest;
    type LLMResponse = Types.LLMResponse;
    
    // Storage
    private stable var nextMessageId : Nat = 1;
    private stable var sessionsEntries : [(Text, ChatSession)] = [];
    private stable var userProfilesEntries : [(Principal, UserProfile)] = [];
    private stable var topicsEntries : [(Text, LearningTopic)] = [];
    
    private var sessions = HashMap.fromIter<Text, ChatSession>(
        sessionsEntries.vals(), 
        sessionsEntries.size(), 
        Text.equal, 
        Text.hash
    );
    
    private var userProfiles = HashMap.fromIter<Principal, UserProfile>(
        userProfilesEntries.vals(),
        userProfilesEntries.size(),
        Principal.equal,
        Principal.hash
    );
    
    private var learningTopics = HashMap.fromIter<Text, LearningTopic>(
        topicsEntries.vals(),
        topicsEntries.size(),
        Text.equal,
        Text.hash
    );
    
    // System upgrade hooks
    system func preupgrade() {
        sessionsEntries := Iter.toArray(sessions.entries());
        userProfilesEntries := Iter.toArray(userProfiles.entries());
        topicsEntries := Iter.toArray(learningTopics.entries());
    };
    
    system func postupgrade() {
        sessionsEntries := [];
        userProfilesEntries := [];
        topicsEntries := [];
    };
    
    // Utility functions
    private func generateSessionId() : Text {
        let now = Time.now();
        Nat.toText(Int.abs(now))
    };
    
    private func getCurrentTime() : Int {
        Time.now()
    };
    
    // Chat Management Functions
    
    public func createChatSession(userId: ?Principal, topic: ?Text) : async SessionResponse {
        let sessionId = generateSessionId();
        let now = getCurrentTime();
        
        let newSession : ChatSession = {
            id = sessionId;
            userId = userId;
            messages = [];
            createdAt = now;
            updatedAt = now;
            topic = topic;
        };
        
        sessions.put(sessionId, newSession);
        
        {
            success = true;
            session = ?newSession;
            error = null;
        }
    };
    
    public func getChatSession(sessionId: Text) : async SessionResponse {
        switch (sessions.get(sessionId)) {
            case (?session) {
                {
                    success = true;
                    session = ?session;
                    error = null;
                }
            };
            case null {
                {
                    success = false;
                    session = null;
                    error = ?"Session not found";
                }
            };
        }
    };
    
    public func sendMessage(sessionId: Text, content: Text, sender: Types.MessageSender) : async ChatResponse {
        switch (sessions.get(sessionId)) {
            case (?session) {
                let messageId = nextMessageId;
                nextMessageId += 1;
                
                let newMessage : Message = {
                    id = messageId;
                    content = content;
                    sender = sender;
                    timestamp = getCurrentTime();
                    sessionId = sessionId;
                };
                
                let updatedMessages = Array.append(session.messages, [newMessage]);
                let updatedSession : ChatSession = {
                    id = session.id;
                    userId = session.userId;
                    messages = updatedMessages;
                    createdAt = session.createdAt;
                    updatedAt = getCurrentTime();
                    topic = session.topic;
                };
                
                sessions.put(sessionId, updatedSession);
                
                {
                    success = true;
                    message = ?newMessage;
                    error = null;
                }
            };
            case null {
                {
                    success = false;
                    message = null;
                    error = ?"Session not found";
                }
            };
        }
    };
    
    public func getSessionMessages(sessionId: Text) : async Result.Result<[Message], Text> {
        switch (sessions.get(sessionId)) {
            case (?session) {
                #ok(session.messages)
            };
            case null {
                #err("Session not found")
            };
        }
    };
    
    // LLM Integration (Mock implementation - replace with actual LLM canister calls)
    
    public func processLLMRequest(request: LLMRequest) : async LLMResponse {
        // This is a mock implementation
        // In production, this would call the actual LLM canister
        
        let defiResponses = [
            "DeFi (Decentralized Finance) refers to financial services built on blockchain technology that operate without traditional intermediaries like banks.",
            "Yield farming is a DeFi strategy where users provide liquidity to protocols in exchange for rewards, typically in the form of tokens.",
            "Smart contracts are self-executing contracts with terms directly written into code, enabling trustless transactions on the blockchain.",
            "Liquidity pools are collections of tokens locked in smart contracts that facilitate decentralized trading and provide market liquidity.",
            "Staking involves locking up cryptocurrency tokens to support network operations and earn rewards in return."
        ];
        
        // Simple keyword-based response selection (replace with actual LLM)
        let response = if (Text.contains(request.prompt, #text "yield")) {
            defiResponses[1]
        } else if (Text.contains(request.prompt, #text "smart contract")) {
            defiResponses[2]
        } else if (Text.contains(request.prompt, #text "liquidity")) {
            defiResponses[3]
        } else if (Text.contains(request.prompt, #text "staking")) {
            defiResponses[4]
        } else {
            defiResponses[0]
        };
        
        {
            content = response;
            usage = ?{
                promptTokens = 50;
                completionTokens = 100;
                totalTokens = 150;
            };
            error = null;
        }
    };
    
    public func askQuestion(sessionId: Text, question: Text) : async ChatResponse {
        // Add user message
        let userMessageResult = await sendMessage(sessionId, question, #User);
        
        if (not userMessageResult.success) {
            return userMessageResult;
        };
        
        // Process with LLM
        let llmRequest : LLMRequest = {
            prompt = question;
            context = ?"You are HAWI-AI, a helpful DeFi educational assistant. Provide clear, beginner-friendly explanations about DeFi concepts.";
            maxTokens = ?500;
            temperature = ?0.7;
        };
        
        let llmResponse = await processLLMRequest(llmRequest);
        
        // Add assistant response
        await sendMessage(sessionId, llmResponse.content, #Assistant)
    };
    
    // Learning Topics Management
    
    public func addLearningTopic(topic: LearningTopic) : async Bool {
        learningTopics.put(topic.id, topic);
        true
    };
    
    public func getLearningTopics() : async [LearningTopic] {
        Iter.toArray(learningTopics.vals())
    };
    
    public func getLearningTopic(topicId: Text) : async ?LearningTopic {
        learningTopics.get(topicId)
    };
    
    // User Profile Management
    
    public func createUserProfile(principal: Principal, preferences: Types.UserPreferences) : async Bool {
        let profile : UserProfile = {
            principal = principal;
            preferences = preferences;
            learningProgress = [];
            createdAt = getCurrentTime();
            lastActive = getCurrentTime();
        };
        
        userProfiles.put(principal, profile);
        true
    };
    
    public func getUserProfile(principal: Principal) : async ?UserProfile {
        userProfiles.get(principal)
    };
    
    public func updateUserProfile(principal: Principal, preferences: Types.UserPreferences) : async Bool {
        switch (userProfiles.get(principal)) {
            case (?profile) {
                let updatedProfile : UserProfile = {
                    principal = profile.principal;
                    preferences = preferences;
                    learningProgress = profile.learningProgress;
                    createdAt = profile.createdAt;
                    lastActive = getCurrentTime();
                };
                userProfiles.put(principal, updatedProfile);
                true
            };
            case null { false };
        }
    };
    
    // Analytics and Statistics
    
    public func getSessionCount() : async Nat {
        sessions.size()
    };
    
    public func getUserCount() : async Nat {
        userProfiles.size()
    };
    
    public func getTopicCount() : async Nat {
        learningTopics.size()
    };
    
    // Health check
    public func healthCheck() : async Text {
        "HAWI-AI Backend is running smoothly! 🧠✨"
    };
    
    // Initialize with sample learning topics
    public func initializeSampleTopics() : async Bool {
        let sampleTopics : [LearningTopic] = [
            {
                id = "defi-basics";
                title = "DeFi Basics";
                description = "Introduction to Decentralized Finance";
                difficulty = #Beginner;
                content = "Learn the fundamentals of DeFi, including key concepts, benefits, and how it differs from traditional finance.";
                tags = ["basics", "introduction", "defi"];
                createdAt = getCurrentTime();
            },
            {
                id = "yield-farming";
                title = "Yield Farming";
                description = "Understanding yield farming strategies";
                difficulty = #Intermediate;
                content = "Explore yield farming techniques, risks, and rewards in the DeFi ecosystem.";
                tags = ["yield", "farming", "liquidity"];
                createdAt = getCurrentTime();
            },
            {
                id = "smart-contracts";
                title = "Smart Contracts";
                description = "How smart contracts power DeFi";
                difficulty = #Beginner;
                content = "Understand how smart contracts work and their role in decentralized applications.";
                tags = ["smart contracts", "blockchain", "automation"];
                createdAt = getCurrentTime();
            }
        ];
        
        for (topic in sampleTopics.vals()) {
            ignore learningTopics.put(topic.id, topic);
        };
        
        true
    };
}