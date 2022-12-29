import { Button } from "flowbite-react";
import React, { useState } from "react";
import MyTaskModal from "./MyTaskModal";

const MyTask = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="container m-3 p-2 mx-auto sm:p-4 dark:bg-gray-700 dark:text-gray-100">
      <h2 className="mb-4 text-3xl font-medium">My Tasks</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-lg">
          <thead className="dark:dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Serial</th>
              <th className="p-3">Title</th>
              <th className="p-3">Sub-title</th>
              <th className="p-3">Details</th>
              <th className="p-3">Action</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20 dark:dark:border-gray-300 dark:dark:bg-gray-50">
              <td className="p-3">
                <p>1</p>
              </td>
              <td className="p-3">
                <p>Shopping</p>
              </td>
              <td className="p-3">
                <p>For my family</p>
              </td>
              <td className="p-3">
                <p>fjsdoifwerjwiwjj klfjsdfiowe jgoirwhrf jfsklfusif eirkjf </p>
              </td>
              <td className="p-3 flex items-center">
                <Button
                  className="bg-sky-500"
                  size="xs"
                  onClick={() => setVisible(true)}
                >
                  Edit
                </Button>
                <Button className="ml-2" size="xs" color="failure">
                  Delete
                </Button>
              </td>
              <td className="p-3">
                <Button
                  size="sm"
                  type="submit"
                  className=" text-white px-3 py-1 font-semibold rounded-md dark:dark:bg-indigo-600 dark:dark:text-gray-50"
                >
                  <span>Completed</span>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <MyTaskModal visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default MyTask;
