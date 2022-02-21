const db = connect("mongodb://localhost:27017/actimon");

db.users.drop();
db.habits.drop();

db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["username", "email", "hash"],
            properties: {
                username: {
                    bsonType: "string",
                    description: "must be string of length [1,20] and is required",
                    minLength: 1, maxLength: 20
                },
                email: {
                    bsonType: "string",
                    description: "must be email of length [9,50] and is required",
                    minLength: 9, maxLength: 50,
                    pattern: "^[0-z]+@[0-z]{3,}\.[a-z]{2,}$"
                },
                hash: {
                    bsonType: "string",
                    description: "must be string of length [1,255] and is required",
                    minLength: 1, maxLength: 255
                }
            }
        }
    }
});

db.createCollection("habits", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["user", "habit", "goal", "unit", "creationDate", "duration", "history"],
            properties: {
                user: {
                    bsonType: "objectId",
                    description: "must be objectId and is required"
                },
                habit: {
                    bsonType: "string",
                    description: "must be string and is required",
                    minLength: 1, maxLength: 255
                },
                goal: {
                    bsonType: "number",
                    description: "must be positive number and is required",
                    minimum: 1
                },
                unit: {
                    bsonType: "string",
                    description: "must be string and is required",
                    enum: [
                        "times",
                        "hours", "days", "weeks", "months", "years",
                        "meters", "kilometers", "miles"
                    ]
                },
                creationDate: {
                    bsonType: "number",
                    description: "must be a non-negative number and is required",
                    minimum: 0
                },
                duration: {
                    bsonType: "number",
                    description: "must be a non-negative number and is required",
                    minimum: 0
                },
                history: {
                    bsonType: "array",
                    description: "must be array and is required"
                }
            }
        }
    }
});
