import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import image from "../assets/images/img.jpg";
import axios from "axios";
import BlogCard from "./BlogCard";
import Loading from "./Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "./baseURL";

const Blog = () => {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleBlogDelete = (id: String) => {
    window.confirm("Confirm Delete this blog?") &&
      axios
        .post(baseURL + "blog/delblog", {
          delid: id,
        })
        .then((res) => {
          navigate("/");
          toast("Blog Deleted Successfully");
        });
  };

  return (
    <div className="text-justify">
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image src={image} height={520} />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={700} size={32}>
            {state.blog.title}
          </Text>
        </Group>
        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500} size={18}>
            By {state.blog.author}
          </Text>
        </Group>
        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500} size={18}>
            Published on {state.blog.date.slice(0,10)}
          </Text>
        </Group>
        {state.blog.content.map((para: string, idx: number) => {
          return (
            <Text
              key={idx}
              size="lg"
              style={{
                color: secondaryColor,
                lineHeight: 1.5,
                marginBottom: 10,
              }}>
              {para}
            </Text>
          );
        })}
        {console.log(state.blog)}
        {/* <Button
          variant="light"
          color="grape"
          style={{ marginTop: 14 }}
          onClick={() => {
            handleBlogDelete(state.blog._id);
          }}>
          Delete Blog
        </Button> */}
      </Card>
    </div>
  );
};

const SideBar = () => {
  const [blogs, setBlogs] = useState<[]>([]);

  useEffect(() => {
    axios
      .get(baseURL + "blog/viewfewblog")
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
      <div className="text-center md:text-left">Recently Added Blogs</div>
      <div className="border-2 p-1 border-gray-300 mx-auto grid gap-4 w-[80%] grid-cols-1 min-[550px]:grid-cols-2 min-[550px]:w-[95%] md:grid-cols-3 md:w-full lg:grid-cols-4 xl:grid-cols-1">
        {blogs.length ? (
          blogs.map((blog, idx) => {
            return (
              <div key={idx}>
                <BlogCard blog={blog} />
              </div>
            );
          })
        ) : (
          <div className="w-full h-screen flex justify-around mx-auto align-middle">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

const BlogDetails = () => {
  return (
    <>
      <div className="w-[90%] mx-auto grid grid-cols-4 gap-4">
        <div className="col-span-4 xl:col-span-3">
          <Blog />
        </div>
        <div className="col-span-4 xl:col-span-1">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
