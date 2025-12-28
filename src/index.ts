import { generateRandomString } from "./utils/string"
import { generateSecureRandomString } from "./utils/uuid"
import { generateRandomNumber } from "./utils/number"

const main = () => {
    console.log("Random String:")   
    console.log(generateRandomString(10))
    console.log("--------------------------------")

    console.log("Secure Random String:")
    console.log(generateSecureRandomString(10))
    console.log("--------------------------------")

    console.log("Random Number:")
    console.log(generateRandomNumber())
    console.log("--------------------------------")
}

main()