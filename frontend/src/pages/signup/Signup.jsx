import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => (
  <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        SignUp
        <span className="text-green-300"> OtakuChat (オタク)</span>
      </h1>
      <form>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Denji"
            className="w-full input input-bordered h-10"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">UserName</span>
          </label>
          <input
            type="text"
            placeholder="denji"
            className="w-full input input-bordered h-10"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="Enter Password"
            className="w-full input input-bordered h-10"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Confirm Password</span>
          </label>
          <input
            type="text"
            placeholder="Confirm Password"
            className="w-full input input-bordered h-10"
          />
        </div>

        {/* GENDER CHECKBOX GOES HERE */}
        <GenderCheckbox />
        <a
          className="text-sm hover:underline hover:text-blue-600 inline-block mt-2"
          href="#"
        >
          Already have an Account?
        </a>

        <div>
          <button className="btn btn-block btn-sm mt-2 border border-slate-700">
            {" "}
            SignUp
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Signup;
