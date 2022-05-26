import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl">Razib Debnath</h2>
                    <p className='text-xl '>Email : <span className='text-success'>Razib.debnath016@gmail.com</span> </p>
                    <div>
                        <h2 className='text-center text-3xl text-success'>Educational Background</h2>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>*</th>
                                        <th>Passing Exam</th>
                                        <th>Institution</th>
                                        <th>Passing year</th>
                                        <th>Group</th>
                                        <th>GPA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>SSC</td>
                                        <td>Ideal School and College.</td>
                                        <td>2012</td>
                                        <td>Science</td>
                                        <td>5.00</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>HSC</td>
                                        <td>Birshrestho Munshi Abdur Rouf Public College</td>
                                        <td>2014</td>
                                        <td>Science</td>
                                        <td>5.00</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>B.Sc</td>
                                        <td>Mawlana Bhashani Science And Technology University</td>
                                        <td>2021</td>
                                        <td>CSE</td>
                                        <td>3.47</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>

                </div>
            </div>
            <div className='mt-12 text-xl'>
                <h2 className='text-2xl mb-2'>Three of my Projects link is here :</h2>
                <p>Thor-Gym : <span className='text-primary'>https://thor-gym-1ba89.firebaseapp.com/</span></p>
                <p>SmartPhone WareHouse : <span className='text-primary'>https://smartphone-warehouse-d99f2.firebaseapp.com/</span></p>
                <p>Choose your Shoe : <span className='text-primary'>https://phenomenal-frangipane-e1e5a6.netlify.app/</span></p></div>
        </div>
    );
};

export default MyPortfolio;