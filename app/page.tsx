"use client";

import { useState } from "react";
import ListCourses from "./components/ListCourses";
import AddCourseForm from "./components/AddCourseForm";

export default function Home() {
  const [showForm, setShowForm] = useState<boolean>(false);

  const formDisplayHandle = () => {
    if (showForm === false) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  return (
    <div className="page-layout">
      {showForm === false ? (
        <div className="card">
          <button
            className="btn bg-transparent text-pink-600"
            onClick={formDisplayHandle}
          >
            + Add Course
          </button>
        </div>
      ) : (
        <AddCourseForm formDisplayHandle={formDisplayHandle} />
      )}
      {showForm === false ? (
        <>
          <div className="w-full mt-8">
            <ListCourses />
          </div>
        </>
      ) : null}
    </div>
  );
}
