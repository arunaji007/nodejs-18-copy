"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("./database/models"));
const axios_1 = __importDefault(require("axios"));
const StartServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.default.sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.listen(process.env.PORT, () => {
        console.log(`Listening to port ${process.env.PORT}`);
    }).on('error', (err) => {
        console.log('Error is', err);
        process.exit();
    });
    app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log('DB Models available:', Object.keys(models_1.default));
            console.log('User model:', models_1.default.User);
            const response = yield axios_1.default.post(process.env.THIRD_PARTY_URL, 'Hello World! testing third party', {
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
            const users = yield models_1.default.User.findAll();
            res.status(200).json({
                success: true,
                data: { users: users }
            });
        }
        catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).json({
                success: false,
                error: "Internal server error"
            });
        }
    }));
    app.post("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, email } = req.body;
            const newUser = yield models_1.default.User.create({
                name,
                email
            });
            res.status(201).json({
                success: true,
                data: newUser
            });
        }
        catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({
                success: false,
                error: "Internal server error"
            });
        }
    }));
});
StartServer();
