
import { formdata } from "../../types/types";
const Local_storage_key = "formdata";

export const savetols = (data: formdata[])=>{
    localStorage.setItem(Local_storage_key,JSON.stringify(data));
};

export const loadfromls = ():formdata[]=>{
    const saved = localStorage.getItem(Local_storage_key);
    return saved ? JSON.parse(saved):[];
}

