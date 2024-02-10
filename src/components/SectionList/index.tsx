import {
  List,
  Datagrid,
  TextField,
  EditButton,
  CreateButton,
  BooleanField,
} from "react-admin";

export const SectionsList = () => {
  return (
    <List>
      <Datagrid>
        {/* <TextField source="id" /> */}
        <TextField source="name" />
        <TextField source="type" />
        <TextField source="createdby" />
        <BooleanField source="hidden" label="Hidden" />
        <EditButton />
      </Datagrid>
      <CreateButton />
    </List>
  );
};
