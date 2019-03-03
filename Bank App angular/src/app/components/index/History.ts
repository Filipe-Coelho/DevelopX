import { Note } from "./Note";
import { Client } from "./Client";

export interface History {
    id: string;
    client:  Client;
    withdrawDate:  string;
    withdrawAmount:  string;
    notes: Note[];
}
