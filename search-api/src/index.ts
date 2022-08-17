import { app } from "./app";
import { PORT } from "./configuration/config";

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
