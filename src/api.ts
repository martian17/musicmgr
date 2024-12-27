class API{}

let baseUrl;

API.prototype.constructor = function(url: string){
    baseUrl = url;
}

API.prototype.constructor = function(url: string, data: any){
    fetch(`${baseUrl}${url}`,{
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    });
}

API.prototype.login = function(username: string, password: string){
    this.post("/login",{username,password});
}

API.prototype.getPlaylists = function(){
}


export default new API("localhost:3500");
