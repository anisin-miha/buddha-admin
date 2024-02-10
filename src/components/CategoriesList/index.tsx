import { List, Datagrid, TextField, CreateButton } from "react-admin";

export const CategoriesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="sectionId" label="sectionId" />
      </Datagrid>
      <CreateButton />
    </List>
  );
};
