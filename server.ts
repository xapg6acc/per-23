// import express from 'express';
// import { PrismaClient } from '@prisma/client';
//
// export const app = express();
// const prisma = new PrismaClient();
//
// app.use(express.json());
//
// // Define the createUser endpoint
// app.post('/users', async (req, res) => {
//   const { name, email } = req.body;
//
//   try {
//     const newUser = await prisma.user.create({
//       data: {
//         name,
//         email,
//       },
//     });
//     res.json(newUser);
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: 'Error creating user' });
//   }
// });
//
// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
