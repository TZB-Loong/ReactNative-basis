/*
 * description: the api for app
 * time: 2017年03月12日21:09:37
 */

const API_BASE_URL = './api';//http://api.zhuishushenqi.com'
const IMG_BASE_URL = 'http://statics.zhuishushenqi.com';
const API_CHAPTER_URL = './chapter/';//http://chapter2.zhuishushenqi.com/chapter/
const WEB_BASE_URL='./spread';

module.exports = {
    API_BASE_URL: API_BASE_URL,
    IMG_BASE_URL: IMG_BASE_URL,
    WEB_BASE_URL:WEB_BASE_URL,

    //GET 首次进入APP，选择性别后，获取推荐列表 url?gender='male'
    BOOK_RECOMMEND: API_BASE_URL + '/book/recommend',
    // 获取正版源(若有) 与 盗版源
    BOOK_ABOOK_SOURCE: API_BASE_URL + '/atoc',
    // 用户偏好推荐
    // GET gender: male | female
    USER_RECOMMEND: API_BASE_URL + '/book/recommend',


    // ----------------book detail----------------
    // GET  书籍详情
    BOOK_DETAIL: (bookId) => {
        return API_BASE_URL + '/book/' + bookId
    },
    // GET 热门评论 url?book=id
    BOOK_HOT_REVIEW: (bookId) => {
        return API_BASE_URL + '/post/review/best-by-book?book=' + bookId
    },
    // GET 根据id推荐书单 url?limit=3
    BOOK_RECOMMEND_BOOK_LIST: (bookId) => {
        return API_BASE_URL + '/book-list/' + bookId + '/recommend'
    },
    // GET 通过作者查询书名 url?author=''
    BOOK_AUTHOR_BOOK_LIST: API_BASE_URL + '/book/accurate-search',
    /**
     * GET 根据标签查询书籍列表
     * @param tags
     * @param start
     * @param limit
     */
    BOOK_TAG_BOOK_LIST: API_BASE_URL + '/book/by-tags',
    /**
     * 获取书籍详情讨论列表
     * @param book  bookId
     * @param sort  updated(默认排序)
     *              created(最新发布)
     *              comment-count(最多评论)
     * @param type  normal
     *              vote
     * @param start 0
     * @param limit 20
     */
    BOOK_DISCUSSION_LIST: API_BASE_URL + '/post/by-book',
    /**
     * 获取书籍详情书评列表
     * @param book  bookId
     * @param sort  updated(默认排序)
     *              created(最新发布)
     *              comment-count(最多评论)
     * @param start 0
     * @param limit 20
     */
    BOOK_REVIEW_LIST: API_BASE_URL + '/post/review/by-book',

    // ----------------read platform----------------
    // GET 获取书的章节信息 http://api.zhuishushenqi.com/mix-atoc/5569ba444127a49f1fa99d29?view=chapters
    READ_BOOK_CHAPTER_LIST: (bookId) => {
        return API_BASE_URL + '/mix-atoc/' + bookId + '?view=chapters'
    },
    // GET 获取书的章节详情 'http://chapter2.zhuishushenqi.com/chapter/'
    // http://chapter2.zhuishushenqi.com/chapter/http:%2F%2Fbook.my716.com%2FgetBooks.aspx%3Fmethod=content&bookId=633074&chapterFile=U_753547_201607012243065574_6770_1.txt
    READ_BOOK_CHAPTER_DETAIL: (chapterUrl) => {
        return API_CHAPTER_URL + chapterUrl
    },

    // ----------------discover----------------
    // GET 排行榜
    DISCOVER_CHARTS: API_BASE_URL + '/ranking/gender',
    /**
     * GET 通过id获取排行榜详情
     * http://api.zhuishushenqi.com/ranking/564d820bc319238a644fb408
     * 周榜：id->_id
     * 月榜：id->monthRank
     * 总榜：id->totalRank
     */
    DISCOVER_CHARTS_DETAIL: (id) => {
        return API_BASE_URL + '/ranking/' + id
    },
    /**
     * GET 获取主题书单列表
     * @param 本周最热：duration=last-seven-days&sort=collectorCount
     * @param 最新发布：duration=all&sort=created
     * @param 最多收藏：duration=all&sort=collectorCount
     * @param start 从多少开始请求
     * @param tag 都市、古代、架空、重生、玄幻、网游
     * @param gender male、female
     * @param limit  20
     */
    DISCOVER_BOOK_LIST: API_BASE_URL + '/book-list',
    // GET 获取主题书单标签列表
    DISCOVER_BOOK_LIST_TAG: API_BASE_URL + '/book-list/tagType',
    // GET 获取书单详情
    DISCOVER_BOOK_LIST_DETAIL: (bookListId) => {
        return API_BASE_URL + '/book-list/' + bookListId
    },
    // GET 获取分类
    DISCOVER_CATEGORY_LIST: API_BASE_URL + '/cats/lv2/statistics',
    // GET 获取二级分类
    DISCOVER_CATEGORY_LIST_V2: API_BASE_URL + '/cats/lv2',
    /**
     * GET 按分类获取书籍列表
     * @param gender male、female
     * @param type   hot(热门)、new(新书)、reputation(好评)、over(完结)
     * @param major  玄幻
     * @param start  从多少开始请求
     * @param minor  东方玄幻、异界大陆、异界争霸、远古神话
     * @param limit  50
     */
    DISCOVER_CATEGORY_BOOKS: API_BASE_URL + '/book/by-categories',

    // ----------------community----------------
    /**
     * 获取综合讨论区帖子列表
     * 全部、默认排序  http://api.zhuishushenqi.com/post/by-block?block=ramble&duration=all&sort=updated&type=all&start=0&limit=20&distillate=
     * 精品、默认排序  http://api.zhuishushenqi.com/post/by-block?block=ramble&duration=all&sort=updated&type=all&start=0&limit=20&distillate=true
     * @param block      ramble:综合讨论区
     *                   original：原创区
     *                   girl: 女生区
     * @param duration   all
     * @param sort       updated(默认排序)
     *                   created(最新发布)
     *                   comment-count(最多评论)
     * @param type       all
     * @param start      0
     * @param limit      20
     * @param distillate true(精品)
     */
    COMMUNITY_BOOK_DISCUSSION_LIST: API_BASE_URL + '/post/by-block',
    // 获取综合讨论区帖子详情
    COMMUNITY_BOOK_DISCUSSION_DETAIL: (id) => {
        return API_BASE_URL + '/post/' + id
    },
    // 获取神评论列表(综合讨论区、书评区、书荒区皆为同一接口)
    COMMUNITY_BOOK_COMMENT_BEST: (id) => {
        return API_BASE_URL + '/post/' + id + '/comment/best'
    },
    /**
     * 获取综合讨论区帖子详情内的评论列表
     * @param start              0
     * @param limit              30
     */
    COMMUNITY_BOOK_DISCUSSION_COMMENT_LIST: (id) => {
        return API_BASE_URL + '/post/' + id + '/comment'
    },
    /**
     * 获取书评区帖子列表
     * 全部、全部类型、默认排序  http://api.zhuishushenqi.com/post/review?duration=all&sort=updated&type=all&start=0&limit=20&distillate=
     * 精品、玄幻奇幻、默认排序  http://api.zhuishushenqi.com/post/review?duration=all&sort=updated&type=xhqh&start=0&limit=20&distillate=true
     *
     * @param duration   all
     * @param sort       updated(默认排序)
     *                   created(最新发布)
     *                   helpful(最有用的)
     *                   comment-count(最多评论)
     * @param type       all(全部类型)、xhqh(玄幻奇幻)、dsyn(都市异能)...
     * @param start      0
     * @param limit      20
     * @param distillate true(精品) 、空字符（全部）
     */
    COMMUNITY_BOOK_REVIEW_LIST: API_BASE_URL + '/post/review',
    // 获取书评区帖子详情
    COMMUNITY_BOOK_REVIEW_DETAIL: (id) => {
        return API_BASE_URL + '/post/review/' + id
    },
    /**
     * 获取书评区、书荒区帖子详情内的评论列表
     * @param start             0
     * @param limit             30
     */
    COMMUNITY_BOOK_REVIEW_COMMENT_LIST: (id) => {
        return API_BASE_URL + '/post/review/' + id + '/comment'
    },
    /**
     * 获取书荒区帖子列表
     * 全部、默认排序  http://api.zhuishushenqi.com/post/help?duration=all&sort=updated&start=0&limit=20&distillate=
     * 精品、默认排序  http://api.zhuishushenqi.com/post/help?duration=all&sort=updated&start=0&limit=20&distillate=true
     * @param duration   all
     * @param sort       updated(默认排序)
     *                   created(最新发布)
     *                   comment-count(最多评论)
     * @param start      0
     * @param limit      20
     * @param distillate true(精品) 、空字符（全部）
     */
    COMMUNITY_BOOK_HELP_LIST: API_BASE_URL + '/post/help',
    // 获取书荒区帖子详情
    COMMUNITY_BOOK_HELP_DETAIL: (id) => {
        return API_BASE_URL + '/post/help/' + id
    },


    // ----------------search----------------
    // GET 热门关键字
    SEARCH_HOT_WORD: API_BASE_URL + '/book/hot-word',
    // GET 关键字补全
    SEARCH_AUTO_COMPLETE: API_BASE_URL + '/book/auto-complete',
    // GET 书籍查询
    SEARCH_BOOKS: API_BASE_URL + '/book/fuzzy-search',
    // http://api.zhuishushenqi.com/mweb/home?node=575f74f27a4a60dc78a435a3&spread=575f74f27a4a60dc78a435a3&pl=ios
    // GET 精选列表
    SELECTION_NODES: API_BASE_URL + '/mweb/home?node=575f74f27a4a60dc78a435a3&spread=575f74f27a4a60dc78a435a3&pl=ios',
    // http://api.zhuishushenqi.com/recommendPage/node/books/all/57832d0fbe9f970e3dc4270c?ajax=ajax&st=1&size=10
    // GET 精选列表书籍
    SELECTION_NODES_BOOKS:(id)=>{
        return API_BASE_URL + '/recommendPage/node/books/all/'+id;
    }
}
