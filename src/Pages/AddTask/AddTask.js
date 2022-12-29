import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const subTitle = e.target.sub_title.value;
    const details = e.target.details.value;

    // photo upload
    const photoURL = e.target.photo.value;

    const taskData = {
      title,
      subTitle,
      details,
      photoURL,
    };

    fetch("https://my-daily-activity-server.vercel.app/addtask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Task added successfull");
        e.target.reset();
        console.log(data);
      });

    navigate("/mytask");
  };

  return (
    <section className="p-6 dark:bg-gray-900 dark:text-gray-100">
      <form
        onSubmit={handleSubmit}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-700">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className=" text-3xl font-medium">Add Task</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="title" className="text-lg">
                Task title
              </label>
              <input
                name="title"
                type="text"
                placeholder="Task title"
                className="w-full border-2 p-1 rounded-md dark:border-gray-300 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sub_title" className="text-lg">
                Sub Title
              </label>
              <input
                name="sub_title"
                type="text"
                placeholder="Task sub title"
                className="w-full border-2 p-1 rounded-md dark:border-gray-300 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="details" className="text-lg">
                Task Details
              </label>
              <textarea
                name="details"
                placeholder="Task details"
                className="w-full border-2 p-1 rounded-md dark:border-gray-300 dark:text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="photo" className="text-lg">
                Photo
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo url"
                className="w-full p-1 rounded-md dark:border-gray-300 dark:text-gray-200"
              />
              <div className="flex items-center space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 border bg-sky-500 mt-5 text-white rounded-md dark:border-gray-800"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddTask;
