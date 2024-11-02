import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const user = useLoaderData();

    const [data, setData] = useState(user);

    const handleDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Successfully deleted');
                    const remaining = user.filter(got => got._id !== id);
                    setData(remaining);
                }
            });
    };
    return (
        <div>
            <p>{data.length}</p>

            {
                data.map((data, idx) => <p key={idx}>{data.email} : {data.password}: {data._id} : <Link to={`/update/${data._id}`}>Update</Link>  <button onClick={() => handleDelete(data._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;