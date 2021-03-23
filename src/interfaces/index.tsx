import { OptionTypeBase } from "react-select";

export interface IState {
    responsiveMode: string
    selectedForm: IStateForm
}

export interface IStateForm {
    states: Array<OptionTypeBase>,
    selectedState: OptionTypeBase
}

export interface IAction {
    type: string;
    payload?: any
}