import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import UserTable from './UserTable/UserTable';

const MakeAdmin = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${localStorage.getItem('AccessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    let index = 0;
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserTable
                                key={user._id}
                                user={user}
                                index={index + 1}
                            ></UserTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;