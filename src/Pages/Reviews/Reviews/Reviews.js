import useReviews from '../../../hooks/useReviews';
import Review from '../REview/Review';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h2 className='text-center text-3xl text-secondary  my-12'>Customers Reviews</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;