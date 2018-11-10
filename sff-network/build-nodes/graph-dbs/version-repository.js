var media_constants = rootAppRequire('sff-network/media-constants');
const {DELETE_UNUSED_RECORDS}=media_constants;
module.exports = function (graph_db) {

    class VersionRepository {


//   we need a update tracker,,,,
//   L_UPDATE_STATE
//    STEP 1,2,3,4....   THIS WILL GIVE US AN ARRAY INDEX OF THENABLES


//

// if we store the update_steps inside the L_VERSION, then we can
// to an atomic update of 'update_step=0' and 'db_version=+1' in one shot


        /*
         VersionRepository.updateDbVersion()
         .then( (new_db_version)=>console.log('new_version==', new_db_version));
         */
        static updateDbVersion() {
            var update_sql = ` // VersionRepository.updateDbVersion.update           
                        MATCH (n_version:L_VERSION) 
                         WITH n_version.current_version+1 as v_new_db_version
                        MERGE (n_version:L_VERSION)
                 ON MATCH SET n_version.current_version = v_new_db_version ,
                              n_version.update_step = 0 `;
            return graph_db.sqlParams(update_sql, {});
        }

        //
        // static endOfUpdate() {
        //     var update_sql = ` // VersionRepository.endOfUpdate           
        //                MERGE (n_version:L_VERSION)
        //          ON MATCH SET n_version.update_step = 0  `;
        //     return graph_db.sqlParams(update_sql, {});
        // }
        //

     static startOfUpdate() {
            var update_sql = ` // VersionRepository.endOfUpdate           
                       MERGE (n_version:L_VERSION)
                 ON MATCH SET n_version.update_step = 1  `;
            return graph_db.sqlParams(update_sql, {});
        }





        static currentDbVersion() {
            var current_sql = ` // VersionRepository.currentDbVersion        
                                MATCH (n_version:L_VERSION )
                               RETURN * `;
            return graph_db.sqlParams(current_sql, {})
                .then((current_version_record)=> {
                        if (typeof current_version_record.records[0] === 'undefined') {
                            return 0;
                        } else {
                            return current_version_record.records[0]._fields[0].properties.current_version;
                        }
                    }
                )
        }

        static createDbVersion1() {
            var create_sql = ` // VersionRepository.createDbVersion        
                        MERGE (n_version:L_VERSION)
                ON CREATE SET n_version.current_version = 1,
                              n_version.update_step = 0,
                              n_version.quality_books=2
                    `;
            return graph_db.sqlParams(create_sql, {});
        }




        /*
         VersionRepository.deleteUnused(123)
         .then( (db_version_counts)=>console.log('db_version_counts==', db_version_counts));
         */
        static deleteUnused(limit_records = DELETE_UNUSED_RECORDS) {
            var before_count, after_count;
            var count_sql = ` // VersionRepository.count_sql.count_sql      
                      MATCH (n) 
                    RETURN COUNT(n)                                  `;
            return graph_db.sqlParams(count_sql, {})
                .then((before_records)=> {
                    before_count = before_records.records[0]._fields[0].low;
                    return;
                })
                .then(()=> {
                    var unused_sql = ` // VersionRepository.deleteUnused.unused_sql        
                         MATCH (n_version:L_VERSION) 
                          WITH n_version.current_version as v_new_db_version
                         MATCH (n_media) 
                         WHERE (NOT n_media:L_VERSION)
                           AND n_media.db_version<>v_new_db_version
                          WITH n_media LIMIT ${limit_records}
                 DETACH DELETE n_media  `;
                    return graph_db.sqlParams(unused_sql, {});
                })
                .then(()=> {
                    return graph_db.sqlParams(count_sql, {})
                        .then((after_records)=> {
                            after_count = after_records.records[0]._fields[0].low;
                            return {limit_records, before_count, after_count};
                        })
                })

        }


    }
    return VersionRepository;
}
