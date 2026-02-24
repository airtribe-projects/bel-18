const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usersModel = require("../../src/models/usersModel");
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const { registerUser, loginUser } = require("../../src/controllers/usersController");

let mongoServer;

// BeforeAll Hook --> It runs before any of the tests are executed
// Environment setup

// beforeEach, afterEach

describe("User Authentication tests", () => {

    beforeAll(async() => {
        mongoServer = await MongoMemoryServer.create();
        const uri = await mongoServer.getUri();
        await mongoose.connect(uri);
    }, 20000)

    // AfterAll Hook --> It runs after all og the tests are executed
    // Cleanup / Teardown

    afterAll(async() => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    }, 20000)


    describe("Test registerUserFunction", () => {
        it('should register a new user successfully with all fields', async () => {
            const user = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };
            
            const dbUser = await registerUser(user);

            expect(dbUser).toHaveProperty("_id");
            expect(dbUser.name).toBe(user.name);
            expect(dbUser.email).toBe(user.email);
            expect(dbUser.role).toBe(user.role);
            console.log(user.password, dbUser.password);
            const isPasswordSame = bcrypt.compareSync(user.password, dbUser.password);
            // console.log(isPasswordSame);
            expect(isPasswordSame).toBe(true); // Ensure password is hashed
        });

    })
})






