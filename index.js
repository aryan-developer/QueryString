/**
 * Create Instance
 * **/
const queryString = new QueryString();

/**
 * Check 'a' is set or not
 * */
if (queryString.QueryStringIsSet("a")){
    alert("a isset")
}else{
    alert("a is not set")
}

/**
 * get 'a' Query String
 */
let aQueryString = queryString.getQueryStringWithKey("a");
let qKey = aQueryString.key; // 'a' key
let qValue = aQueryString.value; // 'a' value
alert(`Key is ${qKey}
Value is ${qValue}`)