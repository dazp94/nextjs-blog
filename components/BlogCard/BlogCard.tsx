import React from "react";
import Link from "next/link";

import { Avatar, Badge, Box, WrapItem } from "@chakra-ui/react";
import shortenText from "../../utils/shortenText";
import toText from "../../utils/toText";

const BlogCard = ({ thumbnail, avatar, author, link, title, content }) => (
  <WrapItem>
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      margin="5px"
      overflow="hidden"
    >
      <img
        src={thumbnail}
        alt={title}
        style={{ objectFit: "cover", width: 400, height: 250 }}
      />
      <Box maxW="sm" borderRadius="lg" margin="10px" overflow="hidden">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar size="sm" src={avatar} name={title} />
          <div style={{ width: 5 }} />
          <Badge>{author}</Badge>
        </div>
        <div style={{ height: 5 }} />
        <b>{shortenText(title, 0, 48)}</b>
        <div style={{ textAlign: "justify" }}>
          {shortenText(toText(content), 0, 120)}
        </div>
      </Box>
    </Box>
  </WrapItem>
);

export default BlogCard;
