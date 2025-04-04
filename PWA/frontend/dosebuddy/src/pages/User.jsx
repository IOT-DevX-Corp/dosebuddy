import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function User() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-medical-800">
                        Welcome, {user?.username}
                    </h1>
                    <p className="text-gray-600">{user?.email}</p>
                </div>
                
                <div className="space-y-4">
                    {/* Add more user profile content here */}
                    <button
                        onClick={() => {
                            localStorage.removeItem('user');
                            navigate('/');
                        }}
                        className="w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-medical-600 hover:bg-medical-700"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}