import { useLoaderData } from "react-router-dom";

const Update = () => {

    const loadedData = useLoaderData();

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const updatedUser = { email, password };

        fetch(`http://localhost:5000/users/${loadedData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Updated');
                    form.reset();
                }
            });
    };

    return (
        <div>
            <h1>Update</h1>
            <form onSubmit={handleUpdate}>
                <input type="email" name="email" defaultValue={loadedData?.email} />
                <br />
                <input type="text" name="password" defaultValue={loadedData?.password} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;