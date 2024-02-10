import { Admin, Resource } from "react-admin";
import { authProvider, dataProvider } from "./firebaseConfig";
import MenuList from "./components/MenuList";
import MenuEdit from "./components/MenuEdit";
import { radiantLightTheme, radiantDarkTheme } from "react-admin";
import { SectionsList } from "./components/SectionList";
import MenuCreate from "./components/MenuCreate";
import { CategoriesList } from "./components/CategoriesList";
import { SectionsCreate } from "./components/SectionCreate";
import { CategoriesCreate } from "./components/CategoriesCreate";
import { SectionsEdit } from "./components/SectionsEdit";

export const App: React.FC = () => {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      lightTheme={radiantLightTheme}
      darkTheme={radiantDarkTheme}
    >
      <Resource
        name="menu"
        list={MenuList}
        edit={MenuEdit}
        create={MenuCreate}
      />
      <Resource
        name="sections"
        list={SectionsList}
        create={SectionsCreate}
        edit={SectionsEdit}
        // edit={MenuEdit}
      />
      <Resource
        name="categories"
        list={CategoriesList}
        create={CategoriesCreate}
      />
    </Admin>
  );
};
