import { List, Datagrid, TextField, CreateButton } from "react-admin";

export const SectionsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        {/* <TextField source="categories" /> */}
      </Datagrid>
      <CreateButton />
    </List>
  );
};
