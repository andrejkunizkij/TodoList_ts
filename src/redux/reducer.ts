import '../App.css';

enum ACTION_TYPES {
    ADD_TODO = 'ADD_TODO',
    COMPLETE_TODO = 'COMPLETE_TODO',
    DELETE_TODO = 'DELETE_TODO'
}

interface ITask {
    newLi: string;
    done: boolean;
    id: number;
}

interface IAppState {
    tasks: ITask[]
}

 const inititalState: IAppState = {
    tasks: [
        // {newLi: 'first item', done: false, id: Date.now()}
    ],
};


export default function rootReducer(state = inititalState, action: any) {

    switch (action.type) {
        case ACTION_TYPES.ADD_TODO:
            return Object.assign({}, state, {
                tasks: [
                    ...state.tasks,
                    {
                        newLi: action.payload,
                        done: false,
                        id: Date.now()
                    }
                ]
            });
        case ACTION_TYPES.COMPLETE_TODO:
            let index = 0;
            const item = state.tasks.find((task, idx: number) => {
                if (task.id === action.payload) {
                    index = idx;
                    return task
                }
            });
            item!.done = !item!.done;
            const tasks = state.tasks;
            tasks.splice(index, 1, item!);

            return Object.assign({}, state, {
                tasks: [
                    ...tasks
                ]
            });

        case ACTION_TYPES.DELETE_TODO:
            return Object.assign({}, state, {
                tasks: [
                    ...state.tasks.filter(task => task.id !== action.payload)
                ]
            })

    }

    return state
}

