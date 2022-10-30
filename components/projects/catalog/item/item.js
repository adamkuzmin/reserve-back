import React from "react";
import styled from "styled-components";
import { Space, Popconfirm } from "antd";
import Link from "next/link";

import { Btn, ItemWrapper, Photo } from "./__styles";
import { openMessage } from "../../form/upload/upload";

const Item = ({ data: item = {} }) => {
  const { cover_vertical_url, nameru, _id } = item;

  const handleDelete = async () => {
    await fetch("/api/projects/delete", {
      method: "POST",
      body: JSON.stringify({
        _id,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        openMessage("success", "Проект успешно удален");
      })
      .catch((e) => {
        openMessage("error", "Произошла ошибка при удалении");
      });
  };

  const deleteCfgs = {
    title: "Вы действительно хотите удалить",
    onConfirm: handleDelete,
    onCancel: () => {},
    okText: "Да",
    cancelText: "Нет",
  };

  return (
    <>
      <ItemWrapper>
        <ItemWrapper.Left>
          <Photo fill={cover_vertical_url} />
          <div>{nameru}</div>
        </ItemWrapper.Left>

        <ItemWrapper.Right>
          <Space>
            <Link href={`/projects/update/${_id}`}>
              <Btn>Редактировать</Btn>
            </Link>

            <Popconfirm {...deleteCfgs}>
              <Btn>Удалить</Btn>
            </Popconfirm>
          </Space>
        </ItemWrapper.Right>
      </ItemWrapper>
    </>
  );
};

export default Item;
