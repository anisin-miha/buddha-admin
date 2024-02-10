import { Edit, SimpleForm, TextInput } from "react-admin";

const textFields = [
  "180ml_price",
  "30ml_price",
  "60ml_price",
  "bottle_price",
  "dish",
  "dish_ru",
  "glass_price",
  "ingridients",
  "ingridients_ru",
  "price",
];

const MenuEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        {textFields.map((item) => (
          <TextInput key={item} source={item} label={item} />
        ))}
      </SimpleForm>
    </Edit>
  );
};

export default MenuEdit;
