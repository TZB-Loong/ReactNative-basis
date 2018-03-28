import * as getindex_data from './getindex_data';
import * as discoverBookListTag from './booklistAction';
import * as bookDetail from './bookAction';
import * as discoverBookListDetail from './booklistDetailAction';
import * as discoverCategoryList from './categoryAction';
import * as  getSpread from './homeAction';
import * as ranking from './rankingAction';
import * as  readBookChapterList from './readAction';
import * as  searchBooks from './searchAction';
import * as discoverSingleMenuList from './selectionAction';
export default {
    ...getindex_data,
    ...discoverBookListTag,
    ...bookDetail,
    ...discoverBookListDetail,
    ...discoverCategoryList,
    ... getSpread,
    ...ranking,
    ...readBookChapterList,
    ...searchBooks,
    ...discoverSingleMenuList
}