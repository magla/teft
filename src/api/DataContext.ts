import { createContext } from "react";
import { Post } from "./interfaces";
import { default as data } from './data.json';

export const DataContext = createContext<Post>(data);
