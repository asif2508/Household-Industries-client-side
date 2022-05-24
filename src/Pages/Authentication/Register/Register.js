import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';


const Register = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [token] = useToken(user || guser)
    const { register, formState: { errors }, handleSubmit } = useForm();
    if(loading || updating || gloading){
        return <Loading></Loading>
    }
    if(token){
        navigate('/')
        console.log(user);
    }
    const onSubmit = async data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };
    const handleSignInGoogle = () => {
        signInWithGoogle();
    }
    return (
        <div className='flex justify-center mt-12 mb-16'>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-primary">
                <h1 className='text-3xl mt-4 mb-0'>Create a New Acoount</h1>
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Name"
                                class="input input-bordered"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                                {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                class="input input-bordered"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                        message: 'Provide a proper email address'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                class="input input-bordered"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message: 'Provide a proper Password'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                            </label>

                        </div>
                        {error && <label className="label text-error">
                                {error?.message}
                            </label>}
                            {gerror && <label className="label text-error">
                                {gerror?.message}
                            </label>}
                        <input class="btn btn-secondary w-full" type="submit" value='Register' />
                    </form>
                    <div className='flex items-center'>
                        <label class="label">
                            <small>Already have an account?</small>
                        </label>
                        <label class="label">
                            <Link to='/login' class="label-text-alt link link-hover link-secondary ml-0">Login</Link>
                        </label>
                    </div>
                    <div class="divider">OR</div>
                    <button onClick={handleSignInGoogle} class="btn btn-secondary">sign in with Google</button>
                </div>
            </div>


        </div>
    );
};

export default Register;