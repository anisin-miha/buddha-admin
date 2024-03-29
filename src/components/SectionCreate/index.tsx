import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

export const SectionsCreate: React.FC = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Name" />
        <SelectInput
          defaultValue={"food"}
          source="type"
          label="Type"
          choices={[
            { id: "food", name: "Food" },
            { id: "drinks", name: "Drinks" },
          ]}
        />
        <BooleanInput source="hidden" label="Hidden" />
      </SimpleForm>
    </Create>
  );
};
