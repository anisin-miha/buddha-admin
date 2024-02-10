import { List, Datagrid, TextField, CreateButton } from "react-admin";

export const CategoriesList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="name" />
        <TextField source="sectionId" label="sectionId" />
      </Datagrid>
      <CreateButton />
    </List>
  );
};
