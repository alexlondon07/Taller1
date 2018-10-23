class HttpBase{

    async basePost(url, config){
         try {
             const options = {
                 method: 'POST',
                 headers: this.headersConfig(config.headers),
                 body: JSON.stringify(config.params)
             }
             let query = await this.callHttp(url, options);
             const data = await query.json();
             return data;
         } catch (error) {
             throw new Error(error)   
         }
     }
     
     async baseGet(url, config){
         try {
             const options = {
                 method: 'GET',
                 headers: this.headersConfig(config.headers),
             }
             let query = await this.callHttp(url, options);
             const data = await query.json();
             return data;
 
         } catch (error) {
             throw new Error(error)   
         }
     }
 
     async baseGetParams(url, config){
        const options = {
            method: 'GET',
            headers: this.headersConfig(config.headers),
        }
        
        let data;
        
        try {
            let query = await this.callHttp(this.buildUrl(url, config.params), options);
            data = await query.json();
        } catch (error) {
            throw new Error(error)   
        }
        return data;
    }

    buildUrl(url, parameters) {
        let qs = "";
        for (const key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                const value = parameters[key];
                qs +=
                    encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
            }
        }
        if (qs.length > 0) {
            qs = qs.substring(0, qs.length - 1); //chop off last "&"
            url = url + "?" + qs;
        }
        return url;
    }

     callHttp(url, options){
         let promise =  new Promise((resolve, reject) => {
             fetch(url, options)
             .then( response => resolve(response) )
             .catch (error =>reject(error))
         })
         return promise;
     }
 
     headersConfig(customHeaders){
         const defaultHeaders = {
             'Content-Type': 'application/json',
             Accept: 'application/json'
         }
         const headersConfigObject = Object.assign(defaultHeaders, customHeaders);
         let headers = new Headers(headersConfigObject);
         return headers;
     }
 }
 
 export default new HttpBase;