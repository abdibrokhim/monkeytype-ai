"use client"

import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from "../db/firebaseConfig"
import Footer from "../components/Footer"

const RegisterPage = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const navigate = useNavigate()

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault()
        setError(null)
        setMessage(null)

        if (password !== confirmPassword) {
            setError('password does not match')
            return
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            const user = userCredential.user
            await sendEmailVerification(user)

            localStorage.setItem(
                "registrationData",
                JSON.stringify({
                    firstName,
                    lastName,
                    gender,
                    email
                })
            )
            setMessage("Registration successful! Please check your email for verification.")
            setFirstName("")
            setLastName("")
            setGender("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            } else {
                setError("An unknown error occurred!")
            }
        }
    }

    const handleGoToLogin = () => {
        navigate("/login")  // Assuming "/login" is the route for the login page
    }

    return (
           <>
                <div className="px-[100px] bg-[var(--white-color)] text-[var(--black-color)] justify-center items-center h-full  flex flex-col relative" >
            <h2 className="text-2xl font-bold text-center mt-4 mb-10">Register</h2>
            <div className="p-5 border border-gray-300 rounded">
                <form onSubmit={handleRegister} className="space-y-6 px-6 pb-4">
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="firstName" className="text-sm font-medium block mb-2 text-gray-500">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-500 "
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="lastName" className="text-sm font-medium block mb-2 text-gray-500">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-500  "
                            />
                        </div>
                    </div>
                    <div className="space-y-4 w-full">
                        {/* <div>
                            <label htmlFor="gender" className="text-sm font-medium block mb-2 text-gray-500">
                                Gender
                            </label>
                            <select
                                id="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                                className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-500  "
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div> */}
                        <div>
                            <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-500">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-500  "
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium block mb-2 text-gray-500">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-500  "
                            />
                        </div>
                    </div>
                    <div>
                            <label htmlFor="confirmPassword" className="text-sm font-medium block mb-2 text-gray-500">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-500 "
                            />
                        </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    {message && <p className="text-green-500 text-sm">{message}</p>}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border-transparent text-sm font-medium rounded-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign up
                    </button>
                    <button
                        type="button"
                        onClick={handleGoToLogin}
                        className="w-full flex justify-center py-2 px-4 border-transparent text-sm font-medium rounded-medium text-indigo-600 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                    >
                        Go to Login
                    </button>
                </form>
            </div>
        </div>
        <div className="mt-14" >
            <Footer/>
        </div>
        
           </>
    )
}

export default RegisterPage
