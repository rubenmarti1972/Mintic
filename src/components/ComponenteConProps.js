const ComponenteConProps = ({ users }) => {
    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Lastname</td>
                        <td>Email</td>
                        <td>Phone</td>

                    </tr>
                </thead>
                <tbody>
                    {users.map(obj => {
                            return (
                            <tr>
                                <td>{obj.name}</td>
                                <td>{obj.lastname}</td>
                                <td>{obj.email}</td>
                                <td>{obj.phone}</td>

                            </tr>
                            );
                        }
                        )
                    }
                        


                </tbody>
            </table>

        </div>
    );
};

export default ComponenteConProps;
