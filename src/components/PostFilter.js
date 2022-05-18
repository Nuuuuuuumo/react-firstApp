import React from "react";
import Input from "./UI/input/Input";
import MySelect from "./UI/select/MySelect";
const PostFilter = ({ filter, setFilter }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Input
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
