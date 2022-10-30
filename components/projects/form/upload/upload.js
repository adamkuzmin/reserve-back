import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { Upload as AntUpload, notification } from "antd";
import Dragger from "antd/lib/upload/Dragger";

import client from "../../../../sanity/client";
import { Wrapper } from "./__styles";

const openMessage = (type, message) => {
  notification[type]({
    message,
  });
};

const Upload = (formProps = {}) => {
  console.log("formProps", formProps);

  const { value, onChange = () => {} } = formProps;

  const [loading, setLoading] = useState(false);

  const props = {
    name: "file",
    multiple: false,
    accept: "image/*",
    showUploadList: false,
    customRequest: async (options) => {
      const { file } = options;

      client.assets
        .upload("image", file, {
          filename: file.name,
          contentType: file.type,
        })
        .then((e) => {
          const { _id, url } = e;

          const asset = { _id, url };

          onChange(value ? [...value, asset] : [asset]);
          setLoading(false);
          openMessage("success", "Изображение успешно загрузилось!");
        })
        .catch((err) => {
          openMessage("error", "Произошла ошибка при загрузке на сервер");
        });
    },

    onChange(info) {
      const { status } = info.file;

      if (status === "uploading") {
        setLoading(true);
      }
    },
  };

  const coverFill = useMemo(() => {
    if (value && value.length > 0) {
      const [firstImage] = value;
      const { url } = firstImage ? firstImage : {};

      return url;
    }
  }, [value]);

  return (
    <Wrapper fill={coverFill}>
      {loading && <div>Загружается</div>}
      <Dragger {...props}>Загрузить</Dragger>
    </Wrapper>
  );
};

export default Upload;
