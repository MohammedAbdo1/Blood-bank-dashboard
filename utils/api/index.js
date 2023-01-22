import { db } from "../firebase"
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

class Api {


    getAllDoners() {
        return new Promise(async (resolver, reject) => {
            try {
                const donors = collection(db, "donors")
                const data = await getDocs(donors)
                const donorsData = data?.docs?.map((item) => {
                    return {
                        uid: item?.id,
                        ...item?.data()
                    }
                })
                return resolver(donorsData)
            }
            catch (e) {
                return reject("An Error during fetching donors")
            }
        })
    }
}

//eslint import/no-anonymous-default-export
export default new Api()