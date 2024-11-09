package com.example.eestecolympics2024;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

public class DatabaseConn {
    private static final String MONGO_URI = "mongodb+srv://paunescu:abcd1234@eestec2024.lruto.mongodb.net/?retryWrites=true&w=majority&appName=eestec2024";
    private static final String DATABASE_NAME = "catalog";  // Specify your database name here

    public static MongoDatabase initializeDatabase() {
        // Create a new MongoClient instance
        MongoClient mongoClient = MongoClients.create(MONGO_URI);

        // Return the MongoDatabase instance for the specified database
        return mongoClient.getDatabase(DATABASE_NAME);
    }
}