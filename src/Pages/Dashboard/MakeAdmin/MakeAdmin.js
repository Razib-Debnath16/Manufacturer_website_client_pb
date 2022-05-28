import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import UserTable from './UserTable/UserTable';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://enigmatic-shelf-24691.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('AccessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    let index = 0;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
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
                                refetch={refetch}
                            ></UserTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;