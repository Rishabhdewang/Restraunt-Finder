
exports.up = function(knex) { 
    return knex.schema.createTable("restuarants" , (t1) => {
        t1.increments("id").primary();
        t1.string("Name").notNullable().unique();
        t1.string("Loacation").notNullable();
        t1.integer("Price-Range").notNullable();
    })

    
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("restuarants");
  
};
