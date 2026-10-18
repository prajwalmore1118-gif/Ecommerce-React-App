import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();

    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const [formData, setFormData] = useState({
        name: currentUser?.name || "",
        email: currentUser?.email || "",
        image: currentUser?.image || "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = (e) => {
        e.preventDefault();

        // Update logged in user
        localStorage.setItem("loggedInUser", JSON.stringify(formData));

        // Update users array
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const updatedUsers = users.map((user) =>
            user.email === currentUser.email
                ? { ...user, ...formData, password: user.password }
                : user
        );

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        alert("Profile Updated Successfully!");

        navigate("/profile");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900">
            <form
                onSubmit={handleSave}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl w-96"
            >
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Edit Profile
                </h1>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full border p-3 rounded-lg mb-4"
                />

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full border p-3 rounded-lg mb-4"
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files[0];

                        if (!file) return;

                        const reader = new FileReader();

                        reader.onloadend = () => {
                            setFormData({
                                ...formData,
                                image: reader.result,
                            });
                        };

                        reader.readAsDataURL(file);
                    }}
                    className="w-full border p-3 rounded-lg mb-4"
                />

                {formData.image && (
                    <img
                        src={formData.image}
                        alt="Preview"
                        className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-4 border-primary"
                    />
                )}
                
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditProfile;