import { Create, SimpleForm, TextInput } from "react-admin";

export const SectionsCreate: React.FC = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="name" />
      </SimpleForm>
    </Create>
  );
};
