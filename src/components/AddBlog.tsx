import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from "react-toastify";
import { baseURL } from './baseURL';

const AddBlogs: React.FC = () => {
  const [blog, setBlog] = useState({
    author: '',
    date: new Date(),
    title: '',
    content: [''],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
    const { value } = event.target;
    setBlog((prevBlog) => {
      const updatedContent = [...prevBlog.content];
      updatedContent[index] = value;
      return { ...prevBlog, content: updatedContent };
    });
  };

  const handleAddParagraph = () => {
    setBlog((prevBlog) => ({ ...prevBlog, content: [...prevBlog.content, ''] }));
  };

  const handleAddBlog = () => {
    const date = new Date();
    setBlog((prevBlog) => ({ ...prevBlog, date: date }));
    axios
      .post(baseURL + "blog/addblog", {
        blog,
      })
      .then((res) => {
        console.log(res);
        toast("Blog added successfully");
        setBlog({
          author: "",
          date: new Date(),
          title: "",
          content: [""],
        });
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div className="w-[80%] sm:w-96 bg-white p-6 rounded-lg shadow-2xl">
        <div className="mb-4">
          <label htmlFor="author" className="text-gray-700 font-bold">
            Author:
          </label>
          <input
            name="author"
            className="w-full px-2 py-1 mt-1 border border-gray-300 rounded"
            placeholder="Name Surname"
            required
            value={blog.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="text-gray-700 font-bold">
            Title:
          </label>
          <input
            name="title"
            className="w-full px-2 py-1 mt-1 border border-gray-300 rounded"
            placeholder="This is a new Blog"
            value={blog.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="text-gray-700 font-bold">
            Blog Content:
          </label>
          {blog.content.map((paragraph, index) => (
            <textarea
              key={index}
              required
              name="content"
              className="w-full px-2 py-1 mt-1 border border-gray-300 rounded"
              placeholder="Content of blog goes like this"
              value={paragraph}
              onChange={(event) => handleTextAreaChange(event, index)}
            />
          ))}
          <button
            onClick={handleAddParagraph}
            className="text-purple-600 hover:text-purple-700 focus:outline-none"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-1" />
            Paragraph
          </button>
        </div>

        <div className="text-center">
          <button
            className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-700 focus:outline-none"
            onClick={handleAddBlog}
          >
            Add Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
