import { createContext, useEffect, useState } from "react";
import { getAllGames } from "../controllers/gamesController";

export const GamesContext = createContext();
