import { HistoryModel } from "../model/histroryModel";
import { InjectionKey } from "vue";

type historyFunctionType = () => void; 

export const historyKey: InjectionKey<HistoryModel[]> = Symbol("history")
export const historyFunctionKey: InjectionKey<historyFunctionType> = Symbol("historyFunction")