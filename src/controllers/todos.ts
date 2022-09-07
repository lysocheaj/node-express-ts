import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODO: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODO.push(newTodo);
};
