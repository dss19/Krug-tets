import{FC} from 'react';
import {fetchUsers} from "../../store/reducers/ActionCreator";
import {useAppDispatch} from "../../hooks/redux";

export const LoadButton: FC = () => {

    const dispatch = useAppDispatch()
    const onLoadUsers = () => {
        dispatch(fetchUsers());
        const btn: HTMLElement | null = document.getElementById('load');
        if (btn) btn.classList.add('d-none')
    }

    return (
        <div>
            <button id="load" className="btn btn-success w-100" onClick={ onLoadUsers }>Load all users</button>
        </div>
    );
};