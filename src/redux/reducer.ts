// @ts-nocheck
import '../App.css';

export const inititalState: any = {
    tasks: [
        // {newLi: 'first item', done: false, id: Date.now()}
    ],
};

export default function rootReducer(state: any = inititalState, action: any) {

    switch (action.type) {
        case 'ADD_TODO':
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
        case 'COMPLETE_TODO':
            console.log('Complete')
            let index = 0;
            const item = state.tasks.find((task, idx) => {
                if(task.id === action.payload) {
                    index = idx;
                    return task
                }
            })
            item.done = !item.done;
            const tasks = state.tasks;
            tasks.splice(index, 1, item);

            return Object.assign({}, state, {
                tasks: [
                    ...tasks
                ]
            });

            // return Object.assign({}, state, {
            //     tasks: [
            //         ...state.tasks,
            //         {
            //             newLi: action.payload,
            //             done: !state.tasks.done,
            //             id: Date.now()
            //         }
            //     ]
            // })


        // let newState = Object.assign({}, state);
        // newState.tasks.done = !newState.tasks.done;
        // return newState;

        // return Object.assign({}, state, {
        //     tasks: state.tasks.map((task, index) => {
        //         if (index == action.payload) {
        //             return Object.assign({}, task, {
        //                 done: !task.done
        //             })
        //         }
        //         return task
        //     })
        // });


        case 'DELETE_TODO':
            console.log('Delete')
            return Object.assign({}, state, {
                tasks: [
                    ...state.tasks.filter(task => task.id !== action.payload)
                ]
            })
        // const index = state.tasks.findIndex((task) => task.id === action.payload);
        // const tasks = [...state.tasks];
        // tasks.splice(index,1);
        // const newState = Object.assign({}, state);
        // newState.tasks = [];
        // newState.tasks.splice(index, 1);
        // console.log(newState.tasks)
        // newState.tasks.filter(task => task.id !== action.payload);
        // return newState;

        // return Object.assign({}, state, {
        //     tasks: state.tasks.filter(item => item !== action.payload)
        // });
    }

    return state
}