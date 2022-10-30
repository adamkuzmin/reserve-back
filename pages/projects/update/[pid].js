import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormFragment from "../../../components/projects/form/form";

import client from "../../../sanity/client";

const UpdatePage = () => {
  const router = useRouter();
  const { query = {} } = router;
  const { pid } = query;

  const [initialValues, setInitialValues] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "projects" && _id == "${pid}"] {
                    _id,
                    nameru,
                    nameen,
                    description,
                    cover_vertical,
                    cover_horizontal,
                    "cover_vertical_url": cover_vertical.asset->url,
                    "cover_vertical_id": cover_vertical.asset->_id,
                    "cover_horizontal_url": cover_horizontal.asset->url,
                    "cover_horizontal_id": cover_horizontal.asset->_id,
                    geopoint,
                    location_name
                }
                `
      )
      .then((data) => {
        if (data && data.length > 0) {
          let [values] = data;

          const {
            cover_vertical_url,
            cover_vertical_id,
            cover_horizontal_url,
            cover_horizontal_id,
            cover_vertical,
            cover_horizontal,
            ...otherValues
          } = values;

          values = {
            cover_vertical: [
              { url: cover_vertical_url, _id: cover_vertical_id },
            ],
            cover_horizontal: [
              { url: cover_horizontal_url, _id: cover_horizontal_id },
            ],
            ...otherValues,
          };

          setInitialValues(values);
        }

        setLoaded(true);
      })
      .catch((e) => {
        setLoaded(true);
      });
  }, [pid]);

  if (loaded && !initialValues) return <></>;
  if (!loaded) return <></>;

  return <FormFragment {...{ initialValues, pid }} />;
};

export default UpdatePage;
