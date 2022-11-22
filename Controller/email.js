const axios= require("axios");
const API_KEY='d46383e64d011c62253b89c52593314216f7082722f5c1f0ff16db911c7f3ebc';
async function createInbox() {
    // call MailSlurp createInbox endpoint
    return await axios
      .post(`https://api.mailslurp.com/createInbox?apiKey=${API_KEY}`)
      .then((res) => res.data);
  }