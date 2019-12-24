export default function getComments() {
    return new Promise((resolve, reject) => {
      
      const url = `http://localhost:3001/comments`
      fetch(url, {
        method: "GET"
      })
        
        .then((response) => response.json())
        .then((res) => {
         
          resolve(res);
          console.log(res)
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  