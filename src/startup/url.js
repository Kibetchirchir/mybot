const environment = process.env.environment;
let urlToUse;
const url = () => {
    if(environment !== "development"){
        urlToUse = process.env.url;
    }
    urlToUse = process.env.devUrl;
    return urlToUse
};

export default url
