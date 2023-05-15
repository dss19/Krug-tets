import{FC} from 'react';
import {fetchUsers} from "../../store/reducers/ActionCreator";
import {useAppDispatch} from "../../hooks/redux";

export const LoadButton: FC = () => {

    const dispatch = useAppDispatch()

    return (
        <div>
            <button id="load" className="btn btn-success w-100"
                    onClick={ () => dispatch(fetchUsers()) }>Load all users</button>
        </div>
    );
};