import React, { createContext, useContext, useReducer } from 'react'
import { v4 as uuid } from 'uuid'

import { findItemById } from './utils/findItemById'

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

type Action =
  | { type: 'ADD_LIST'; payload: string }
  | { type: 'ADD_TASK'; payload: { text: string; taskId: string } }

interface AppStateContextProps {
  state: AppState
  dispatch: React.Dispatch<Action>
}

interface Task {
  id: string
  text: string
}

interface List {
  id: string
  text: string
  tasks: Task[]
}

export interface AppState {
  lists: List[]
}

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learn Typescript' }],
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
    },
  ],
}

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_LIST': {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: uuid(), text: action.payload, tasks: [] },
        ],
      }
    }

    case 'ADD_TASK': {
      const targetLaneIndex = findItemById(state.lists, action.payload.taskId)
      state.lists[targetLaneIndex].tasks.push({
        id: uuid(),
        text: action.payload.text,
      })
      return {
        ...state,
      }
    }

    default: {
      return state
    }
  }
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData)

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}
