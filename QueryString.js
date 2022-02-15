class QueryString {
    constructor() {
        this.queryString = this.getQueryParams();
    }
    getQueryParams() {
        let queryStringSTR = location.search.replace("?", "").trimEnd();
        let queryStringARRAY = queryStringSTR.split("&");
        let queryString = [];
        queryStringARRAY.forEach(value => {
            let queryStringKeyAndValue = [];
            let querystringKeyVal = value.split("=");
            if (querystringKeyVal[0]) {
                queryStringKeyAndValue['key'] = querystringKeyVal[0];
                queryStringKeyAndValue['value'] = querystringKeyVal[1] ?? null;
                queryString.push(queryStringKeyAndValue);
            }
        });
        return queryString;
    }
    QueryStringIsSet(key) {
        if (typeof key == 'string') {
            for (const queryStringsKey of this.queryString) {
                if (queryStringsKey['key'] === key) {
                    return true;
                }
            }
            return false;
        } else {
            throw "key is not string!"
        }
    }
    getQueryStringWithKey(key) {
        if (typeof key == 'string') {
            if (this.QueryStringIsSet(key)) {
                let queryStrings = this.queryString;
                for (const queryStringsKey of queryStrings) {
                    if (queryStringsKey['key'] === key) {
                        return queryStringsKey;
                    }
                }
            } else {
                throw "key is not set!"
            }
        } else {
            throw "key is not string!"
        }
    }
}
