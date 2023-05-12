import {useAppDispatch} from "../../hooks/redux";
import {deleteUser} from "../../store/reducers/ActionCreator";
import {FC} from "react";
import IUser from "../../models/IUser";

interface UserProps {
    user: IUser
}
export const User: FC<UserProps> = ({user}) => {

    const dispatch = useAppDispatch();

    return (
        <li className="users--list__item list-group-item">
            <div className="user d-flex justify-content-between align-items-center">

                <div className="user--data">
                    <div className="user--name">Name: <span>{ user.name }</span></div>
                    <div className="user--username">Username: <span>{ user.username }</span></div>
                    <div className="user--email">Email: <span>{ user.email }</span></div>
                </div>

                <button onClick={() => dispatch(deleteUser(user.id))}
                        type="button" className="btn btn-outline-danger">
                    <i className="fa fa-trash-o"/>
                </button>
            </div>
        </li>
    );

}