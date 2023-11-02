const express = require ("express");
const app = express ();
const PORT = 8080;

app.use(express.json())

app.use("/customers", require("./routes/customers"));
app.use("/scooters", require("./routes/scooters"));
app.use("/stores", require("./routes/stores"));
app.use("/customerscooters", require("./routes/customerscooters"));
app.use("/storesscooters", require("./routes/storesscooters"));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));