import React from 'react';
import { IState, IAction } from '../interfaces';

const initialState: IState = {
    responsiveMode: 'desktop'
}

const defaultAction: React.Dispatch<IAction> = () => {};

const FormStateContext = React.createContext<IState>(initialState);
const FormDispatchContext = React.createContext<React.Dispatch<IAction>>(defaultAction)

function formReducer(state: IState, action: IAction) {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

function FormProvider({children}:any) {
    const [state, dispatch] = React.useReducer(formReducer, initialState)
    return (
      <FormStateContext.Provider value={state}>
        <FormDispatchContext.Provider value={dispatch}>
          {children}
        </FormDispatchContext.Provider>
      </FormStateContext.Provider>
    )
}

function useFormState() {
    const context = React.useContext(FormStateContext)
    if (context === undefined) {
      throw new Error('useFormState must be used within a FormProvider')
    }
    return context
}

function useFormDispatch() {
    const context = React.useContext(FormDispatchContext)
    if (context === undefined) {
      throw new Error('useFormDispatch must be used within a FormProvider')
    }
    return context
}
  
  export {FormProvider, useFormState, useFormDispatch};