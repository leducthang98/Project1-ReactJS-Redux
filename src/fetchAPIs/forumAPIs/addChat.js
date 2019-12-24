export default function addChat(data) {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/chatboxData'
        fetch(url, {
          method: "POST",
          headers: {"Content-type":"application/json"},
          body: JSON.stringify(data)
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