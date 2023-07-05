

exports.queryList = {

    GET_STORE_LIST_QUERY: 'SELECT STORE_ID, STORE_NAME, STORE_CODE FROM BMS.STORE',

    SAVE_STORE_QUERY: 'INSERT INTO BMS.STORE(STORE_NAME, STORE_CODE, CREATED_ON, CREATED_BY, ADDRESS) VALUES($1,$2,$3,$4,$5)',
    GET_BOOK_LIST_QUERY: 'SELECT BOOK_ID, BOOK_TITLE, BOOK_AUTHOR, BOOK_PUBLISHER FROM BMS.BOOK',
    GET_BOOK_DETAILS_QUERY: `SELECT BOOK_ID, BOOK_TITLE, BOOK_DESCRIPTION, BOOK_AUTHOR, BOOK_PUBLISHER, BOOK.STORE_CODE, BOOK.CREATED_ON, BOOK.CREATED_BY, BOOK_PAGES  ,STORE.STORE_NAME ,STORE.ADDRESS  
FROM BMS.BOOK INNER JOIN BMS.STORE ON BOOK.STORE_CODE = STORE.STORE_CODE 
WHERE BOOK_ID  =$1` ,
    SAVE_BOOK_QUERY: `INSERT INTO BMS.BOOK (BOOK_TITLE, BOOK_DESCRIPTION, BOOK_AUTHOR, BOOK_PUBLISHER, STORE_CODE, CREATED_ON, CREATED_BY, BOOK_PAGES) VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,
    UPDATE_BOOK_QUERY: `UPDATE BMS.BOOK SET BOOK_TITLE=$1, BOOK_DESCRIPTION=$2, BOOK_AUTHOR=$3, BOOK_PUBLISHER=$4, STORE_CODE=$5, BOOK_PAGES=$6 
    WHERE BOOK_ID=$7`,
    DELETE_BOOK_QUERY: 'DELETE FROM BMS.BOOK WHERE BOOK_ID= $1'
}
