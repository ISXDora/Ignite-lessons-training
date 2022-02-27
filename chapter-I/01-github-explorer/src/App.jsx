import {React} from 'react';
import '../public/global.scss'
import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';

export function App(){

    return (
        <>
        <RepositoryList/>
        <Counter/>
        </>
    )
}