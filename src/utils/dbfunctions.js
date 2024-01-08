import { doc, getDocs, addDoc, collection, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

// function to get the db 
export const getContact = async ()=>{
    try {
      const contactsRef  = collection(db,"contacts");
      const snapShot = await getDocs(contactsRef);
      const contactsList = snapShot.docs.map((doc)=>{return { id: doc.id, ...doc.data() }}) // the id and all other data of the document fomr the collection
      return contactsList;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }


// function to save the chnages to db
export async function addNewContactToDb(contact){
    try{
        const contactRef = collection(db,"contacts");
        await addDoc(contactRef,contact)
    }catch(err){
        console.log("some error occured while uploading to db ",err);
    }
}

// function to edit
export const editContactFromDb = async(id,newData)=>{
    try {
        const contactRef = doc(db,"contacts", id);
        await updateDoc(contactRef,newData);
    } catch (error) {
        console.log("error while trying to update the contact ",error);
    }
}

// function to delete
export const deleteContactFromDb = async(id)=>{
    try{
        await deleteDoc(doc(db,"contacts",id));
    }catch(err){
        console.log('error while delteing the contact ',err)
    }
}