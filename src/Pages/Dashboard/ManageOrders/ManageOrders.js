import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ShowAllOrders from './ShowAllOrders/ShowAllOrders';

const ManageOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://enigmatic-shelf-24691.herokuapp.com/orders').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto lg:max-h-screen">
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                            <th>Shipping Status</th>
                            <th>Modify Shipping Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ShowAllOrders
                                key={order._key}
                                order={order}
                                index={index + 1}
                                refetch={refetch}
                            ></ShowAllOrders>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;