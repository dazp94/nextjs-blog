import React, { useState, useEffect } from "react";
import BlogCard from "../BlogCard";
import { Spinner, Wrap } from "@chakra-ui/react";
const mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@MediumStaff";

interface State {
  itemRows: any;
  avatar: string;
  profileLink: string;
  loading: boolean;
  error: boolean;
}

const initialState: State = {
  itemRows: [],
  avatar: "",
  profileLink: "",
  loading: true,
  error: false,
};

const BlogSlider = () => {
  const [state, setState] = useState(initialState);

  const setData = (data) => {
    const avatar = data.feed.image;
    const profileLink = data.feed.link;
    const res = data.items; //This is an array with the content. No feed, no info about author etc..
    const posts = res.filter((item) => item.categories.length > 0);

    setState({ ...state, avatar: avatar, profileLink: profileLink });
    const itemRows = [];
    posts.forEach((item, i) => {
      item["avatar"] = state.avatar; // push avatar inside the json
      item["profilelink"] = state.profileLink; // push profile link inside the JSON
      const row = Math.floor(i / 3);
      if (!itemRows[row]) itemRows[row] = [];
      itemRows[row].push(item);
    });

    setState({ ...state, itemRows: itemRows, loading: false });
  };

  useEffect(() => {
    const fetchData = async () => {
      const posts = await fetch(mediumURL)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            setState({ ...state, error: true });
          }
        })
        .then((data) => data)
        .catch(() => {
          setState({ ...state, error: true });
        });
      setData(posts);
    };
    fetchData();
  }, []);

  return (
    <Wrap justify="center">
      {state.error ? (
        "Something went wrong, please refresh the page."
      ) : state.loading ? (
        <Spinner size="xl" thickness="4px" speed="0.65s" />
      ) : (
        state.itemRows.map((row) => row.map((item) => <BlogCard {...item} />))
      )}
    </Wrap>
  );
};

export default BlogSlider;
