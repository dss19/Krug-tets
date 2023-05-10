import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { deleteUser } from "../../store/reducers/ActionCreator";

const userTemplate = (name: string, username: string, email: string) => {    
    return (        
        <div className="user--data">
            <div className="user--name">Name: <span>{ name }</span></div>
            <div className="user--username">Username: <span>{ username }</span></div>
            <div className="user--email">Email: <span>{ email }</span></div>
        </div>
    )
}

export default function CreateUser() {    

    const { users } = useAppSelector(state => state.userReducer);

    const dispatch = useAppDispatch();

    const elements = users.map((item) => {        
        const { name, username, email, id } = item;
        return (
            <li className="users--list__item list-group-item" key={ id }>
                <div className="user d-flex justify-content-between align-items-center">

                    { userTemplate(name, username, email) }

                    <button onClick={() => dispatch(deleteUser(id))} 
                            type="button" className="btn btn-outline-danger">
                        <i className="fa fa-trash-o" />  
                    </button>
                </div>                                
            </li>
        );
    });        
    return elements;  
}