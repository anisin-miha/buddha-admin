import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

export const SectionsEdit: React.FC = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" label="Name" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { id: "food", name: "Food" },
            { id: "drinks", name: "Drinks" },
          ]}
        />
        <BooleanInput source="hidden" label="Hidden" />
      </SimpleForm>
    </Edit>
  );
};
