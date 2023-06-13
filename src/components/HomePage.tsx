import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import Loading from "./Loading";

const HomePage = () => {
  const [blogs, setBlogs] = useState<[]>([]);

  useEffect(() => {
    axios
      .get("https://famous-undershirt-colt.cyclic.app/blog/viewblog")
      .then((res) => {
        console.log(res.data.blogList);
        setBlogs(res.data.blogList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="w-[60%] md:w-[85%] mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.length ? (
          blogs.map((blog, idx) => {
            return (
              <div key={idx}>
                <BlogCard blog={blog} />
              </div>
            );
          })
        ) : (
          <div className="items-center">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
