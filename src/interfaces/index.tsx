import { FunctionComponent, SVGProps } from "react";
import { OptionTypeBase } from "react-select";

export interface IState {
    responsiveMode: string;
    selectedForm: IStateForm;
}

export interface IStateForm {
    states: Array<OptionTypeBase>;
    selectedState: OptionTypeBase;
    editMode: string;
    editSuccess: boolean;
    selectedTheme: string;
    selectedTool: string;
}

export interface IAction {
    type: string;
    payload?: any;
}

export interface IThemeMenuItem {
    name: string;
    isSelected: boolean; 
    ThemeComponent: JSX.Element;
    steps: number;
    onThemeClick: (themeName: string) => void;
}