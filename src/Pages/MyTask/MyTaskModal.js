import { Button, Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const MyTaskModal = ({ visible, setVisible, task }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(`https://my-daily-activity-server.vercel.app/addtask/${tasks._id}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const handleUpdatedTask = (event) => {
    event.preventDefault();
    fetch(`https://my-daily-activity-server.vercel.app/addtask/${tasks._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tasks),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Task successfully updated");
          console.log(data);
        }
      });
  };

  return (
    <Modal show={visible} onClose={() => setVisible(false)}>
      <Modal.Header> title</Modal.Header>
      <Modal.Body>
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-700">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="text-lg dark:text-gray-200">
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
                <label
                  htmlFor="sub_title"
                  className="text-lg dark:text-gray-200"
                >
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
                <label htmlFor="details" className="text-lg dark:text-gray-200">
                  Task Details
                </label>
                <textarea
                  name="details"
                  placeholder="Task details"
                  className="w-full border-2 p-1 rounded-md dark:border-gray-300 dark:text-gray-900"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label htmlFor="photo" className="text-lg dark:text-gray-200">
                  Photo
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo url"
                  className="w-full p-1 rounded-md dark:border-gray-300 dark:text-gray-200"
                />
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleUpdatedTask}>Update</Button>
        <Button color="failure" onClick={() => setVisible(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyTaskModal;
