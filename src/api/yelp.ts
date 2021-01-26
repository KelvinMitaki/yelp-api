import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer JkPJvEz6OWTdsZbN59XAgXyc6jqI7VmWO_SfQJsJOPCR4sTDCKeKltXlokexb5m7eFpxIrWgWI5YFSEqmg8GAE5jnNqTxrBDmQqZknBSPMkIRckNqA8ZObKcwVwQYHYx`
  }
});
