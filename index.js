const express = require ("express");
const app = express ();
const PORT = 8080;
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.use("/customers", require("./routes/customers"));
app.use("/scooters", require("./routes/scooters"));
app.use("/stores", require("./routes/stores"));
app.use("/customerscooters", require("./routes/customerscooters"));
app.use("/reviews", require("./routes/reviews.js"));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));