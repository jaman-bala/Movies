import { createContext } from "react";


export default createContext < {
    state: undefined;
    dispatch: React.Dispatch < undefined>;
} > ({
    state: undefined,
    dispatch: () => undefined,
});