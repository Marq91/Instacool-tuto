import { Dispatch } from 'redux'
import { IServices } from '../services'

export interface ILogin {
    email: string
    password: string
}

export default function reducer(state = {}) {
    return state
}

// en index.tsx de la raiz withExtraArgument permite traer todas las funciones disponibles desde services
// IServices proviene de la interface en la carpeta services donde se le pasan propiedades de firebase
export const login = ({ email, password }: ILogin) =>
    async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
        // tslint:disable-next-line:no-console
        console.log('**Login fn: email - pass**', email, password)
        await auth.signInWithEmailAndPassword(email, password)
        // tslint:disable-next-line:no-console
        // console.log(result)
    }

export const register = ({ email, password }: ILogin) =>
    async (dispatch: Dispatch, getState: () => any, { auth, db }: IServices) => {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password)
        // tslint:disable-next-line:no-console
        console.log('**Register fn: email y pass:***', email, password)
        // tslint:disable-next-line:no-console
        console.log('**usercredentials', userCredential)
        const { user } = userCredential
        // tslint:disable-next-line:no-console
        console.log(user)
        const id = user ? user.uid : undefined
        const doc = db.collection('users').doc(id)
        await doc.set({ role: 'user' })
    }