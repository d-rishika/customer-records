import { Box, Button, Container, MenuItem, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { formdata } from "../types/types";


const profession = ["IT","Agriculture","Healthcare"];

interface Props{
    onSave:(data:formdata)=>void;
    profession?:string[];
}

export  function Entryform({onSave}: Props){

    const formik = useFormik({
        initialValues:{
          firstname:"",
          lastname:"",
          profession:"",
        },
        validate:(values)=>{
            const errors:{[key:string]:string} = {};

            if(!values.firstname){
                errors.firstname = "First name is rquired"
            }
            if(!values.lastname){
                errors.lastname = "Last name is rquired"
            }
            if(!values.profession){
                errors.profession = "Profession is rquired"
            }
            return errors;
        },
        onSubmit:(values,{resetForm})=>{
            console.log("Form Data: ",values);
            onSave(values);
            resetForm();
        },
    })

    return(

      <Container maxWidth="sm">
        <Typography variant="h3" sx={{textAlign:"center",fontWeight:"bold",marginTop:"15px"}} gutterBottom>
            ENTRY FORM
        </Typography>

        <Box component="form" sx={{display:"flex",flexDirection:"column",gap:6,
    maxWidth: "600px",
    margin: "30px auto",
    padding: "24px",
    border:"2px solid black",
    backgroundColor: "#f5f5f5",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"}} onSubmit={formik.handleSubmit}>
            <TextField label="firstname" name="firstname" value={formik.values.firstname} fullWidth onChange={formik.handleChange}/>
            <TextField label="lastname" name="lastname" value={formik.values.lastname} fullWidth onChange={formik.handleChange}/>
            <TextField select label="profession" name="profession" value={formik.values.profession} fullWidth onChange={formik.handleChange}>
                {profession.map((prof)=>(
                    <MenuItem key={prof} value={prof}>
                     {prof}
                    </MenuItem>
                ))}
            </TextField>
            <Button type="submit" fullWidth color="primary" variant="contained">Submit</Button>
        </Box>
      </Container>
    )
}