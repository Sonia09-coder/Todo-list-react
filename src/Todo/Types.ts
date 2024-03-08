import { Dispatch } from "react";

export enum PivotKeysEnum{
    Tasks="Tasks",
    TaskForm="TaskForm",
    Completed="CompletedTasks",
}

export interface ITask {
    id: string;
    title: string;
    description?:string;
    isFav: boolean
}

export interface ITodoContext{
    activeTasks: ITask[]
    completedTasks: ITask[]
    dispatch : Dispatch<any>
}

export interface ITodoState {
    activeTasks: ITask[];
    completedTasks: ITask[];
}

export enum ActionTypeEnum{
    Add,
    Delete,
    ToggleFavourite,
    Update,
    Completed
}

export type IReducerAction = IAddAction | IDeleteAction |IToggleFavouriteAction | IUpdateAction | ICompletedAction;
export interface IAddAction{
    type: ActionTypeEnum.Add,
    data: ITask
}

export interface IDeleteAction{
    type: ActionTypeEnum.Delete,
    data: {id:string}
}

export interface IToggleFavouriteAction{
    type: ActionTypeEnum.ToggleFavourite,
    data: {id:string}
}

export interface IUpdateAction{
    type: ActionTypeEnum.Update,
    data: ITask
}

export interface ICompletedAction{
    type: ActionTypeEnum.Completed,
    data: {id: string}
}