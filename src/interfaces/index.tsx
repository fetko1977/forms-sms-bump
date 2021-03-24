import { OptionTypeBase } from "react-select";

export interface IState {
    responsiveMode: string
    selectedForm: IStateForm
}

export interface IStateForm {
    states: Array<OptionTypeBase>,
    selectedState: OptionTypeBase,
    editMode: string,
    editSuccess: boolean

}

export interface IAction {
    type: string;
    payload?: any
}