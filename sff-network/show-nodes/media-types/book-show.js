var LabelPositions = rootAppRequire('sff-network/show-nodes/label-positions')
var MediaShow = rootAppRequire('sff-network/show-nodes/media-nodes/media-show')
const {BOTTOM_COLUMNS_Y_OFFSET, HORIZONTAL_COLUMNS, X_NODE_SEPARATION, Y_NODE_SEPARATION, VERTICAL_STAGGER}=LabelPositions
var misc_helper = rootAppRequire('sff-network/misc-helper')
var media_constants = rootAppRequire('sff-network/media-constants');
const program_constants = rootAppRequire('sff-network/program-constants.js');


module.exports = function (data_repository) {

    class BookData extends MediaShow {

// maybe BooksData - plural like symfony class
        static bookPositions2(sorted_nodes, vertical_center, number_columns) {
            var book_count = BookData.arrayObjectCount(sorted_nodes)
            if (book_count) {
                var book_space = {
                    start_x: 0,
                    start_y: vertical_center + BOTTOM_COLUMNS_Y_OFFSET,
                    x_step: X_NODE_SEPARATION,
                    y_step: Y_NODE_SEPARATION,
                    num_columns: number_columns,
                    node_count: book_count
                };

                var book_positions = LabelPositions.downRightRowColumnPositions(book_space, VERTICAL_STAGGER);
                var sorted_labels = Object.keys(sorted_nodes)
                for (let sorted_label of sorted_labels) {
                    var a_node = sorted_nodes[sorted_label];
                    if (a_node.node_type == 'L_BOOK') {            //  if not static then ==this.node_type
                        var x_y = book_positions.shift();
                        a_node.setPosition2(x_y);
                    }
                }
            }
            return sorted_nodes;
        }



        constructor(node_id, db_version, book_title, sorted_label, under_title, last_first_underscores) {
            super(node_id, db_version, book_title, sorted_label);
            this.under_title = under_title;
            this.last_first_underscores = last_first_underscores;
            this.node_type = 'L_BOOK';
        }

        static arrayObjectCount(object_array) {
            return super.arrayObjectCount(object_array, 'BookData')

        }

        bookUrl(strip_author) {
///            this.goto_url = `/author/book/${strip_author}/` + this.under_title;
            this.goto_url =  program_constants.ROUTE_START_BOOK + strip_author + '/' + this.under_title;
        }

        setSizesColor(page_type) {     //L_AUTHOR
            super.setSizesColor(page_type, 'L_BOOK')
        }



      
        static sendBooksOfAuthor(strip_author, under_title, ParseNeo) {
            return data_repository.getBookNodes(under_title)
                .then(function (graph_collection) {
var db_version_index = graph_collection[0].records[0]._fieldLookup['v_db_version']
var db_version= graph_collection[0].records[0]._fields[db_version_index];
                    var parse_neo = new ParseNeo(graph_collection, 'book');
                    var nodes_object = parse_neo.getBookGraph(strip_author)
                    var edges_object = parse_neo.getEdges()
                    var graph_info = {graph_type: 'book_page', strip_author: strip_author, under_title: under_title, db_version:db_version};
                    var nodes_and_edges = {graph_collection, nodes_object, edges_object, graph_info};   /// graph_collection for tests
                    return nodes_and_edges;
                })
        }



        static showBook_read_redirects(strip_author, nodes_string) {
            var my_promises = [];
            var positioned_nodes = {};
            var sorted_labels = Object.keys(nodes_string);
            for (let sorted_label of sorted_labels) {
                var a_node = nodes_string[sorted_label];
                a_node.setGroupColor();
                a_node.bookUrl(strip_author);
                a_node.setSizesColor('L_BOOK');
                var positioned_node = Object.assign({}, a_node);
                positioned_nodes[a_node.id] = a_node;
                if (a_node.node_type === 'L_PDF') {
                    var pdf_promise = misc_helper.getRedirects(a_node, 'goto_url');
                    my_promises.push(pdf_promise)
                } else if (a_node.node_type === 'L_RSD') {
                    //if (a_node.rsd_pdf_link!==''){
                    var rsd_promise = misc_helper.getRedirects(a_node, 'rsd_pdf_link');
                    my_promises.push(rsd_promise)
                }
            }
            return Promise.all(my_promises)
                .then((redirected_nodes)=> {
                    for (let end_url of redirected_nodes) {
                        let {end_redirect_url, node_id, field_name}=end_url;
                        positioned_nodes[node_id][field_name] = end_redirect_url;
                    }
                    var positioned_fixed = Object.values(positioned_nodes);
                    return positioned_fixed;
                })
        }



      static   showBook(strip_author, nodes_string) {
        var positioned_nodes = []
        var sorted_labels = Object.keys(nodes_string);
            for (let sorted_label of sorted_labels) {
                var a_node = nodes_string[sorted_label];
                a_node.setGroupColor();
                a_node.bookUrl(strip_author);  
                 a_node.setSizesColor('L_BOOK');
                var positioned_node = Object.assign({}, a_node);
                positioned_nodes.push(positioned_node);      
            }
         
        return positioned_nodes;
    }




    }

    return BookData;
}




