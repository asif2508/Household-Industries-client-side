import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex justify-center mt-12 mb-16'>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-primary">
                <h1 className='text-3xl mt-4 mb-0'>Login</h1>
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            <label class="label text-secondary">
                                <a href="#" class="label-text-alt link link-hover link-secondary">Forgot password?</a>
                            </label>
                        </div>
                        <input class="btn btn-secondary w-full" type="submit" value='Login' />
                    </form>
                    <div className='flex items-center'>
                        <label class="label">
                            <small>Don't have an account?</small>
                        </label>
                        <label class="label">
                            <Link to='/register' class="label-text-alt link link-hover link-secondary">Register now</Link>
                        </label>
                    </div>
                    <div class="divider">OR</div>
                    <button class="btn btn-secondary">sign in with Google</button>
                </div>
            </div>


        </div>
    );
};

export default Login;