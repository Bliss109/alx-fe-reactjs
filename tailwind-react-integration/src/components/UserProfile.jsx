import React from "react";

function UserProfile() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
            {/* Profile Image with hover effect */}
            <img 
                src="https://via.placeholder.com/150"
                alt="User"
                className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
            />

            {/* User Name with hover text color effect */}
            <h1 className="text-lg sm:text-lg md:text-xl font-semibold mb-2 text-blue-800 my-4 text-center transition-colors duration-300 ease-in-out hover:text-blue-500">
                John Doe
            </h1>

            {/* User Description */}
            <p className="text-sm sm:text-sm md:text-base text-gray-600 text-center">
                Developer at Example Co. Loves to write code and explore new technologies.
            </p>
        </div>
    );
}

export default UserProfile;

