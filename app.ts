import express from 'express';
// import db from './database/models';
import { Server } from 'http';
import { Request, Response } from 'express';
import axios from 'axios';

const StartServer = async () => {
  // try {
  //     await db.sequelize.authenticate();
  //     console.log('Database connection has been established successfully....');
  // } catch (error) {
  //     console.error('Unable to connect to the database:', error);
  // }

  // console.error('Fatal error occurrred');
  // process.exit(1);
  console.log('tessss')
  const app = express();
  app.use(express.json());

  app
    .listen(8080, () => {
      console.log(`ListeninsgSs to port ${8080}`);
    })
    .on('error', (err) => {
      console.log('Error is', err);
      process.exit();
    });

  // const baseUrl = process.env.BASE_URL;

  // app.get(`${baseUrl}/users`, async (req: Request, res: Response) =>  {
  //     try {
  //         console.log('DB Models available:', Object.keys(db));
  //         console.log('User model:', db.User);
  //         const response = await axios.post(process.env.THIRD_PARTY_URL as string, 'Hello World! testing third party', {
  //             headers: {
  //                 'Content-Type': 'text/plain'
  //             }
  //         });
  //         const users = await db.User.findAll();
  //         res.status(200).json({
  //             success: true,
  //             data: {users:users}
  //         });
  //     } catch (error) {
  //         console.error("Error fetching users:", error);
  //         res.status(500).json({
  //             success: false,
  //             error: "Internal server error"
  //         });
  //     }
  // });

  // app.post(`${baseUrl}/user`, async (req: Request, res: Response) => {
  //     try {
  //         const { name, email } = req.body;
  //         const newUser = await db.User.create({
  //             name,
  //             email
  //         });
  //         res.status(201).json({
  //             success: true,
  //             data: newUser
  //         });
  //     } catch (error) {
  //         console.error("Error creating user:", error);
  //         res.status(500).json({
  //             success: false,
  //             error: "Internal server error"
  //         });
  //     }
  // });

  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK check tests' });
  });
};

StartServer();
