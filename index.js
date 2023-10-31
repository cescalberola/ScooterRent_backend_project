const express = require ("express");
const app = express ();
const PORT = 8080;

app.use(express.json())

app.use("/customers", require("./routes/customers"));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));