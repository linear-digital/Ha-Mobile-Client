
import React from 'react'
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import Contact from '../Contact/Contact'
import Loading from '../Loading/Loading'
import ProductCard from '../Product/ProductCard'
import ReviewCard from '../Review/ReviewCard'
import Slider from './Slider'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
const Home = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    const url = 'https://ha-mobile-server.vercel.app/product'
    const { isLoading, data } = useQuery(['products'], () =>
        fetch(url).then(res =>
            res.json()
        )
    )
    const { isLoading: loading2, data: reviews } = useQuery(['reviews'], () =>
        fetch('https://ha-mobile-server.vercel.app/review').then(res =>
            res.json()
        )
    )

    if (isLoading || loading2 || loading) {
        return <Loading />
    }
    return (
        <div className=''>
            <div className="hero w-full min-h-auto py-20 bg-base-100">
                <div className="hero-content w-full justify-between flex-col lg:flex-row md:flex-col">

                    <div className='ml-5'>
                        <h1 className='text-xl mb-4 font-bold text-neutral'>Wellcome To</h1>
                        <h1 className="text-5xl leading-tight font-bold text-left">
                            Hazrat Ali <br />
                            Mobile Shop</h1>
                        <p className="py-6 text-left">
                            We Provide All Type Of Mobile Parts And Accessories</p>
                        <div className='flex justify-start'>
                            <button className='btn' onClick={() => {
                                user ? navigate('/product') : navigate('/login')
                            }}>Get Started</button>

                        </div>
                    </div>
                    <Slider />
                </div>
            </div>

            <div className='container mx-auto mt-14 '>
                <h1 className='text-center text-4xl my-5 font-bold'>Our  Products</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-10 gap-7'>
                    {
                        data?.slice(0, 4).map(product => <ProductCard key={product._id} product={product} />)
                    }
                </div>
                <div className='flex justify-center mt-10'><Link to='/product' className='btn btn-primary'>See All Product</Link></div>
            </div>

            <section className='container mx-auto mt-14'>

                <div className="shadow w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4" >
                    <div className="stat place-items-center">
                        <div className="stat-title">New Orders</div>
                        <div className="stat-value">301</div>
                        <div className="stat-desc mt-2">From March To May {2024}</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Deliverd</div>
                        <div className="stat-value">2,300</div>
                        <div className="stat-desc">From January 1st to May 1st</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Current Users</div>
                        <div className="stat-value text-secondary">1,200</div>
                        <div className="stat-desc text-secondary">↗︎ 15 (5%)</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Happy Client</div>
                        <div className="stat-value">1.8 k</div>
                        <div className="stat-desc">↘︎ 50 (10%)</div>
                    </div>
                </div>
                <div className='shadow-2xl py-5 p-5 lg:p-10 mt-6 w-full lg:flex items-center lg:justify-between'>
                    <div>
                        <h1 className='text-primary text-4xl mb-3 font-bold'>Have any question about us or get a <br />
                            product request</h1>
                        <h2 className='text-2xl pt-3'>Don't hesitate to contact us</h2>
                    </div>
                    <div className='mt-10 md:mt-0 lg:mt-0'>
                        <Link to='/dashboard/review' className='btn lg:px-5 btn-primary mr-5'>Write a Review</Link>
                        <Link to='/contact' className='btn lg:px-5 btn-neutral'>contact ue</Link>
                    </div>
                </div>
            </section>
            {/* Reviews  */}
            <div className='container mx-auto'>
                <h1 className='text-5xl text-center mt-16'>Testimonials</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-14 gap-5 mt-14 gap-5">
                    {
                        reviews?.slice(0, 4).map(review => <ReviewCard key={review._id} review={review} />)
                    }

                </div>
                <div className={`flex justify-center`}>
                    <Link to='/review' className='btn mt-10'>Show All</Link>
                </div>
            </div>


            <Contact />
        </div>
    )
}

export default Home