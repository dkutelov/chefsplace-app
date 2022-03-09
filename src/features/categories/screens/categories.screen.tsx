import { SafeArea } from "../../../components/utils/safe-area.component";
import CategoryListItem from "../components/category-list-item.component";
import { Categories } from "./categories.styles";
import { IProps } from "../components/category-list-item.component";
import mock from "./mock.json";

//TODO: Fetch Categories & Loading
//TODO: Categories stack and display relevant products

export const CategoriesScreen = () => {
  return (
    <SafeArea>
      <Categories
        data={mock}
        renderItem={(item: IProps) => <CategoryListItem item={item.item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeArea>
  );
};
