import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Create, SelectInput, SimpleForm, TextInput } from "react-admin";
import { firestore } from "../../firebaseConfig";

export const CategoriesCreate: React.FC = () => {
  const [sections, setSections] = useState<{ id: string; name: string }[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  useEffect(() => {
    const fetchSections = async () => {
      const sectionsCollectionRef = collection(firestore, "sections");
      const sectionsSnapshot = await getDocs(sectionsCollectionRef);

      const sectionsData = sectionsSnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setSections(sectionsData);
    };

    fetchSections();
  }, []);

  return (
    <Create>
      <SimpleForm>
        <SelectInput
          source="sectionId"
          label="Section"
          choices={sections}
          optionText="name"
          onChange={(event) => {
            setSelectedSection(event.target.value);
          }}
        />
        <TextInput source="name" label="name" />
      </SimpleForm>
    </Create>
  );
};
