export function makeRequestQuery(query) {
    let strQuery = `?partner=picky&v=3`;
    
    // Append filters to query
    for (let field in query) {
        if (!!query[field]) {
            strQuery += `&${field}=${query[field]}`;
        }
    }
    console.log('xxx: query: ', strQuery);

    return strQuery;
}
