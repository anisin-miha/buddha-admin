import React, { useEffect, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Filter,
  SelectInput,
} from "react-admin";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";

const MenuFilter: React.FC = (props) => {
  const [sections, setSections] = useState<{ id: string; name: string }[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    [],
  );

  const [selectedSection, setSelectedSection] = useState<string | null>(null);

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

  const handleSectionChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    setSelectedSection(event.target.value as string);
  };

  return (
    <Filter {...props}>
      <SelectInput
        label="Section"
        source="sectionId"
        choices={sections.map((section) => ({
          id: section.id,
          name: section.name.toLowerCase(),
        }))}
        onChange={handleSectionChange as any}
      />
      <SelectInput
        label="Category"
        source="categoryId"
        choices={categories.map((category) => ({
          id: category.id,
          name: category.name.toLowerCase(),
        }))}
      />
    </Filter>
  );
};

const MenuList: React.FC = (props) => {
  return (
    <List {...props} filters={<MenuFilter />}>
      <Datagrid>
        <TextField source="dish" />
        <TextField source="price" />
        <TextField source="category" />
        <TextField source="categoryId" label="categoryId" />

        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default MenuList;
