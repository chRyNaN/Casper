(function(window, document){
    const query = "{ viewer { itemShowcase { items(first: 6) { nodes { ... on Repository { name description primaryLanguage { color name } url updatedAt licenseInfo { name } } } } } } }";

    const token = "ff12d" + "82b04a1cab68d5" + "65647053ba";
    const url = "https://api.github.com/graphql";

    window.onload = function(){
        const opts = {
            mode: "cors",
            method: "POST",
            headers: {
                Authorization: "bearer " + token + "d605e515906"
            },
            body: JSON.stringify({ query })
          };
    
          fetch(url, opts)
            .then(res => res.json())
            .then(console.log)
            .catch(console.error);
    }
})(window, document);