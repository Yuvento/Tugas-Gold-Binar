import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";




export default function TodoList (){
    const navigate = useNavigate()
    const [todo,setTodo] = useState ([]);

    async function getTodo() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
          console.log(response);
          setTodo(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      const goToDetail = (props)=>{
  

        navigate(`/todo-detail/${props}`)

      }

      useEffect(()=>{
         getTodo();
      },[])


    return (
        <>
            {
                todo.map((props)=>{
                    return (
                        <>
                        <Card>
                            {props.id}
                        </Card>
{/* 
                        <Link to={`/todo-detail/${props.id}`}>
                            <Button>Click</Button>
                        </Link> */}
                        <Button onClick={() => goToDetail(props.id)}>Go To Detail</Button>
                        </>

                    )
                })
            }
        </>
    )

}