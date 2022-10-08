import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Row } from "react-bootstrap";
import { useNavigate,useParams } from "react-router-dom";


export default function TodoDetail (){
    const {id} = useParams(); // untuk ambil id di url
    const navigate = useNavigate()
    const [todo,setTodo] = useState ([]);

    async function getTodo() {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
          console.log(response);
          setTodo(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(()=>{
         getTodo();
      },[])


    return (
        <>
           <Card>
                {todo.id}
           </Card>
        </>
    )

}