import { randomUUID } from 'crypto';
import { Request, Response } from 'express';

interface User {
	id: string;
	name: string;
	email: string;
}

const usersMemory: User[] = [];

// Return a json with usersMemory data
export const userIndex = async (req: Request, res: Response) => {
	res.json(usersMemory);
};

// Get the req.body json to create a user and add to usersMemory
export const userCreate = async (req: Request, res: Response) => {
	const { name, email } = req.body;

	const id = randomUUID();

	const user: User = {
		id,
		name,
		email,
	};

	usersMemory.push(user);

	res.json(user);
};

// Shows the user with the id passed in the req parameters
export const userShow = async (req: Request, res: Response) => {
	const { user_id } = req.params;

	const user = usersMemory.find((user) => user.id === user_id);

	res.json(user);
};

// Delete the user with the id passed in the req parameters
export const userDelete = async (req: Request, res: Response) => {
	const { user_id } = req.params;

	const userIndex = usersMemory.findIndex((user) => user.id === user_id);

	usersMemory.splice(userIndex, 1);

	res.json({ message: 'User deleted' });
};
