MediaBuild = rootAppRequire('sff-network/build-nodes/media-types/media-build');

var misc_helper = rootAppRequire('sff-network/misc-helper');

var graph_constants = rootAppRequire('sff-network/graph-constants');
const {BOOK_AUTHOR_DELIMITER, WP_SHORT_POST}=graph_constants;
module.exports = function (build_repository) {

    var AuthorBuild = rootAppRequire('./sff-network/build-nodes/media-types/author-build')(build_repository)


    class PostBuild extends MediaBuild {

        static addPosts(author_book_obj) {
            var post_promises = [];
            for (let book_author of author_book_obj) {
                var book = book_author['book'];
                var under_title = misc_helper.alphaUnderscore(book);
                if (under_title === '') {
                    var graph_title = book_author['title'];
                    var author = book_author['author'];
                    var sff_post_url = WP_SHORT_POST + book_author['id'];
                    var strip_author = misc_helper.alphaUnderscore(author);
                    var post_promise = build_repository.savePosts(strip_author, sff_post_url, graph_title, graph_title);
                    post_promises.push(post_promise);
                }
            }
            return Promise.all(post_promises)
        }

        static addBookPosts(author_book_obj) {
            var author_build = new AuthorBuild();
            var book_build = rootAppRequire('./sff-network/build-nodes/media-types/book-build')(build_repository);
            var post_promises = [];
            for (let book_author of author_book_obj) {
                var graph_title = book_author['title'];
                var author = book_author['author'];
                var book = book_author['book'];
                var sff_post_url =  WP_SHORT_POST + book_author['id'];
                var strip_author = misc_helper.alphaUnderscore(author);
                var under_title = misc_helper.alphaUnderscore(book);
                if (under_title) {
                    var author_obj = {};
                    author_obj[strip_author] = author;
                    var author_nodes = author_build.addAuthors(author_obj);
                    post_promises.push(author_nodes);
                    var title_with_authors = under_title + BOOK_AUTHOR_DELIMITER + this.strip_author;
                    var book_obj = {
                        sorted_label: under_title,
                        esc_book_title: book,
                        under_title: under_title,
                        last_first_underscores: [strip_author]
                    };
                    var book_nodes = book_build.addBooksNew({title_with_authors: book_obj});
                    post_promises.push(book_nodes);
                    var post_promise = build_repository.saveBookPost(strip_author, under_title, sff_post_url, graph_title, graph_title);
                    post_promises.push(post_promise);
                }
            }
            return post_promises;
        }

        static authors_to_posts() {
            var post_promise = build_repository.authors_to_posts();
            return post_promise;
        }


        static books_to_posts() {
            var post_promise = build_repository.books_to_posts();
            return post_promise;
        }

        ///////////////////////


    }
    return PostBuild;

}



