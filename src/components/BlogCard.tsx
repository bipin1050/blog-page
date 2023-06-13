import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/img.jpg";

interface Blog {
  title: string;
  author: string;
  date: Date;
  content: string[];
  _id: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const handleBlogClick = () => {
    navigate(`/blogs/${blog._id}`, { state: { blog } });
  };
  
  return (
    <div
      className="m-1 w-full text-justify hover:cursor-pointer"
      onClick={handleBlogClick}>
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image src={image} height={160} alt="Norway" />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={700}>{blog.title}</Text>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {blog.content[0].length > 100
            ? blog.content[0].slice(0, 100)
            : blog.content[0]}{" "}
          ...
        </Text>

        <Button
          variant="light"
          color="grape"
          fullWidth
          style={{ marginTop: 14 }}>
          Read More...
        </Button>
      </Card>
    </div>
  );
};

export default BlogCard;
