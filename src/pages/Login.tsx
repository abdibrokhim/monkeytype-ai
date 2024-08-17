"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../db/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom"
import Footer from "../components/Footer";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate()

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            if (user.emailVerified) {
                console.log("Email is verified");
                
                const registrationData = localStorage.getItem("registrationData");
                const {
                    firstName = "",
                    lastName = "",
                    gender = "",
                } = registrationData ? JSON.parse(registrationData) : {};

                const userDoc = await getDoc(doc(firestore, "users", user.uid));
                if (!userDoc.exists()) {
                    console.log("User document does not exist, creating...");
                    await setDoc(doc(firestore, "users", user.uid), {
                        firstName,
                        lastName,
                        gender,
                        email: user.email,
                    });
                    localStorage.removeItem("registrationData");
                } else {
                    console.log("User document already exists");
                }

                console.log("Redirecting to dashboard...");
                navigate("/");
            } else {
                setError("Please verify your email before logging in.");
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred.");
            }
        }
    };

    
    return (
        <>
            <div  className="px-[100px] bg-[var(--white-color)] text-[var(--black-color)] justify-center items-center h-screen  flex flex-col relative"   >
                <h2 className="font-medium text-4xl text-white mb-10">Firebase Auth</h2>
                <div className="p-5 border-gray-300 rounded border">
                    <form onSubmit={handleLogin}>
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
                                className="border-2 outline-none text-black sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-500  "
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="text-sm font-medium block mb-2 text-gray-500">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-500 "
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 mt-6 bg-black text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-sm font-medium text-gray-500 mt-5">
                        Don&apos;t have an account?{" "}
                        <Link to='/register' className="text-blue-700 hover:underline">
                            Register Here
                        </Link>
                    </p>
                </div>
            </div>
           
            <div  >
                <Footer/>
            </div>
             
           
        </>
    );
};

export default Login;


