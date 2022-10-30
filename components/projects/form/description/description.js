import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Wrapper } from "./__styles";

const EditorQuill = dynamic(() => import("react-quill"), { ssr: false });
const { Quill } = dynamic(() => import("react-quill"), { ssr: false });

const Description = (props = {}) => {
  const { value, onChange = () => {} } = props;

  const editor = useRef();
  useEffect(() => {
    if (editor) {
      console.log("editor", editor.current.retry());
    }
  }, [editor]);

  return (
    <>
      <Wrapper>
        <EditorQuill
          ref={editor}
          placeholder="Описание проекта"
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["blockquote"],
              ["bold", "italic", "underline"],
              [{ list: "bullet" }],
            ],
            clipboard: {
              matchVisual: false,
            },
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
          ]}
          value={value}
          onChange={onChange}
        />
      </Wrapper>
    </>
  );
};

export default Description;
