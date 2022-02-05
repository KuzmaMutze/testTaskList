import { UserType } from '../../types/types';
import { InferActionTypes } from '../store';

const initialState = {
    users: [
        { id: 1, name: 'Bob', tel: '+71234567890' },
        { id: 2, name: 'UserTest1', tel: '+71234567890' },
        { id: 3, name: 'UserTest2', tel: '+71234567890' },
        { id: 4, name: 'UserTest3', tel: '+71234567890' },
        { id: 5, name: 'UserTest4', tel: '+71234567890' },
    ] as Array<UserType>,
    selectedIds: [] as Array<number>,
};

type initialStateType = typeof initialState;
type ActionsType = InferActionTypes<typeof actions>;

export const appReducer = (state = initialState, action: ActionsType): initialStateType => {
    let selectIds: Array<number> = [];
    let editUser: UserType | undefined;

    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.user],
            };
        case 'DEL_SELECTS_USERS': {
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.id),
                selectedIds: state.selectedIds.filter((id) => id !== action.id),
            };
        }
        case 'SELECT_USER_ID': {
            return {
                ...state,
                selectedIds: [...state.selectedIds, action.id],
            };
        }
        case 'SELECT_ALL': {
            selectIds = state.users.map((user) => user.id);

            return {
                ...state,
                selectedIds: selectIds,
            };
        }
        case 'DEL_ALL_SELECT': {
            return {
                ...state,
                selectedIds: [],
            };
        }
        case 'DEL_SELECT_USER_ID': {
            return {
                ...state,
                selectedIds: state.selectedIds.filter((id) => id !== action.id),
            };
        }
        case 'EDIT_USER': {
            editUser = state.users.find((user) => {
                return user.id === action.payload.id;
            });

            if (editUser) {
                editUser.name = action.payload.name;
                editUser.tel = action.payload.tel;
            }

            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.id && editUser) {
                        return editUser;
                    }

                    return user;
                }),
            };
        }
        default:
            break;
    }
    return state;
};

export const actions = {
    addUserAC: (user: UserType) => ({ type: 'ADD_USER', user } as const),
    delSelectsUsersAC: (id: number) => ({ type: 'DEL_SELECTS_USERS', id } as const),
    selectUserAC: (id: number) => ({ type: 'SELECT_USER_ID', id } as const),
    selectAllAC: () => ({ type: 'SELECT_ALL' } as const),
    delAllIdsAC: () => ({ type: 'DEL_ALL_SELECT' } as const),
    delSelectIdAC: (id: number) => ({ type: 'DEL_SELECT_USER_ID', id } as const),
    editUserAC: (payload: UserType) => ({ type: 'EDIT_USER', payload } as const),
};
