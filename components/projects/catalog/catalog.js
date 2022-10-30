import React, { useState, useEffect } from "react";
import styled from "styled-components";
import client from "../../../sanity/client";
import { Wrapper } from "./__styles";
import Item from "./item/item";
import { Button, Space } from "antd";
import Link from "next/link";

const Catalog = () => {
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState();

  useEffect(() => {
    if (!loaded) {
      client
        .fetch(
          `*[_type == "projects"] | order(_createdAt desc) {
                    _id,
                    nameru,
                    nameen,
                    description,
                    cover_vertical,
                    cover_horizontal,
                    "cover_vertical_url": cover_vertical.asset->url,
                    "cover_horizontal_url": cover_horizontal.asset->url,
                    geopoint,
                    location_name
                }
                `
        )
        .then((data) => {
          setProjects(data);
        })
        .catch(console.error);

      setLoaded(true);
    }
  }, [loaded]);

  console.log("projects", projects);

  return (
    <>
      <Wrapper>
        <Space style={{ marginBottom: "18px" }}>
          <Link href="/projects/add">
            <Button>Добавить проект</Button>
          </Link>
        </Space>

        {projects &&
          projects.map((item = {}, i) => {
            return <Item key={`i:${i}`} data={item} />;
          })}
      </Wrapper>
    </>
  );
};

export default Catalog;
