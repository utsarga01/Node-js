import os from  "os";
import fs from "fs";

console.log(os.release());
fs.writeFileSync("log.txt","App crashed due to failure");
fs.appendFileSync("log.txt","App started running");


