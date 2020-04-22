export const fetchArticle = (url) => {
    const requestOptions = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "extract-news.p.rapidapi.com",
            "x-rapidapi-key": "fa4a0fa27bmsh63a662632d3d837p1199d0jsn86bf6d7123fa"
        }
    }
    return fetch(`https://extract-news.p.rapidapi.com/v0/article?url=${encodeURIComponent(url)}`, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Invalid article")
            }
        })
        .then(json => {
            console.log(JSON.stringify(json.article))
            return json
        })
}

export const fetchData = (article) => {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify({
            payload: JSON.stringify(article)
        })
    };

    return fetch("https://iqu5mcqrvg.execute-api.us-east-1.amazonaws.com/prod", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error("Invalid response")
            }
        })
        .then(json => {
            console.log(JSON.stringify(json))
            return json
        })
}