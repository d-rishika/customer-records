import { Paper,Table,TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { formdata } from "../types/types";


interface Props  {
    data:formdata[];
}

export function DataTable({data}: Props){
    return(
        <Paper>
            <Table>
                <TableHead>
                    <TableRow sx={{backgroundColor:"#e3f2fd",borderTop:"1px solid #ccc"}}>
                      <TableCell sx={{fontWeight:"bold",fontSize:"20px"}}>First Name</TableCell>
                      <TableCell sx={{fontWeight:"bold",fontSize:"20px"}}>Last Name</TableCell>
                      <TableCell sx={{fontWeight:"bold",fontSize:"20px"}}>Profession</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{backgroundColor:"#edfdfd"}}>
                    {
                       data.map((fdata,index)=>{
                        return(
                        <TableRow key={index}>
                            <TableCell>{fdata.firstname}</TableCell>
                            <TableCell>{fdata.lastname}</TableCell>
                            <TableCell>{fdata.profession}</TableCell>
                        </TableRow>
                        )
                       })
                    }
                </TableBody>
            </Table>

        </Paper>
    )
}

