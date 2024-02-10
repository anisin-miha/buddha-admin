import { collection, getDocs, query, where } from "firebase/firestore";
import { Create, SelectInput, SimpleForm, TextInput } from "react-admin";
import { firestore } from "../../firebaseConfig";
import { useEffect, useState } from "react";

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

const MenuCreate = (props) => {
  const resultObject = textFields.reduce((acc: any, key) => {
    acc[key] = "";
    return acc;
  }, {});

  const [sections, setSections] = useState<{ id: string; name: string }[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    [],
  );

  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchSectionsAndCategories = async () => {
      const sectionsCollectionRef = collection(firestore, "sections");
      const categoriesCollectionRef = collection(firestore, "categories");

      const sectionsSnapshot = await getDocs(sectionsCollectionRef);
      const categoriesSnapshot = await getDocs(categoriesCollectionRef);

      const sectionsData = sectionsSnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      const categoriesData = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));

      setSections(sectionsData);
      setCategories(categoriesData);
    };

    fetchSectionsAndCategories();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      if (selectedSection) {
        const categoriesCollectionRef = collection(firestore, "categories");
        const categoriesQuery = query(
          categoriesCollectionRef,
          where("sectionId", "==", selectedSection),
        );
        const categoriesSnapshot = await getDocs(categoriesQuery);
        const categoriesData = categoriesSnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }));

        setCategories(categoriesData);
      }
    };

    fetchCategories();
  }, [selectedSection]);

  return (
    <Create {...props}>
      <SimpleForm defaultValues={resultObject}>
        <SelectInput
          source="sectionId"
          label="Section"
          choices={sections}
          optionText="name"
          onChange={(event) => {
            setSelectedSection(event.target.value);
          }}
        />

        <SelectInput
          source="categoryId"
          label="Category"
          choices={categories}
          optionText="name"
          onChange={(event) => {
            setSelectedCategory(event.target.value);
          }}
        />

        {textFields.map((item) => (
          <TextInput key={item} source={item} label={item} />
        ))}
      </SimpleForm>
    </Create>
  );
};

export default MenuCreate;
