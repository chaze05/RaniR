import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface IFormInput {
  email: string;
  password: string;
}

export default function login() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/login', data);
      setLoading(false);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        router.push('/dashboard');
      }
    } catch (err) {
      setLoading(false);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-80">
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label>Email</label>
          <input
            {...register('email', { required: true })}
            type="email"
            className="border p-2 w-full"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            {...register('password', { required: true })}
            type="password"
            className="border p-2 w-full"
          />
          {errors.password && <p className="text-red-500">Password is required</p>}
        </div>
        <button type="submit" disabled={loading} className="bg-green-500 text-white p-2 w-full">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
