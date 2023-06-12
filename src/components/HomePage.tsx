import React from 'react'
import { Card, Image, Text, Button, Group, useMantineTheme } from '@mantine/core';


const BlogCard = () => {

  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  const handleBlogClick = () => {
    console.log("clicked")
  }
  return(
    <div className='m-1 w-full hover:cursor-pointer' onClick={handleBlogClick}>
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image src="./images/img.jpg" height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={700}>Norway Fjord Adventures</Text>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="grape" fullWidth style={{ marginTop: 14 }}>
          Read More...
        </Button>
      </Card>
    </div>
  )
}

const HomePage = () => {
  return (
    <div>
        <div className='w-[60%] md:w-[85%] mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />

        </div>
    </div>
  )
}

export default HomePage