import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../Assets/Images/Logo/google.png';
import github from '../../../Assets/Images/Logo/GitHub-Mark.png';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [token] = useToken(user || gUser || gitUser);
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token || user || gUser || gitUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, gitUser, from])
    let signInError;
    if (error || gError || gitError) {
        signInError = <p className='text-red-500'><small>{error?.message}{gError?.message}</small></p>
    }
    if (loading || gLoading || gitLoading) {
        return <Loading></Loading>;
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);

    };
    const googleSubmit = data => {
        signInWithGoogle(data.email, data.password);
    }
    const githubSubmit = data => {
        signInWithGithub(data.email, data.password);
    }
    return (
        <div className="flex items-center justify-center">
            <div className='card w-96 bg-base-100 shadow-xl'>
                <div className="card-body">
                    <h2 className=" text-center text-3xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })}
                                type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters or longer '
                                }
                            })}
                                type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p>New to Thor Computer Mfr.? <Link className='text-primary' to="/register">Please Register</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={googleSubmit} className="btn btn-secondary"><img className='px-2' src={google} alt="" /> Continue with Google </button>
                    <button onClick={githubSubmit} className="btn btn-secondary"><img className='px-2' src={github} alt="" /> Continue with GitHub</button>

                </div>
            </div>
        </div>
    );
};

export default Login;