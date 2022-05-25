import React,{useState,useEffect} from 'react'

// let obj={
//     id: 1,
//     pid: null,
//     children: [
//         {
//             id: 2,
//             pid: 1,
//             children:[{ id:4, pid:2, children:[{id:6, pid:4}]}]
//         },
//         {id:3, pid:1, children:[{id:5, pid:3}]}
//     ]
//   }

const Home = (props) => {
  const[expand,setExpand]=useState(false)
  const {obj}=props;
 
  useEffect(()=>{
      console.log(props)
  })
  return(
    <div>
      <div style={{backgroundColor:'#74b9ff',paddingLeft:'15px', color:'red'}} onClick={()=>setExpand(!expand)} >Node Id: {obj.id}</div>
      {
       expand && obj.children.map((item)=>{
           console.log(item)
         if(item.children)
         {
           return (
           <div style={{paddingLeft:'15px', padding:"10px 0px 0px 15px "}}>
             <Home obj={item} />
           </div>)
         }else{
          
          return <div style={{backgroundColor:'#74b9ff',marginLeft:'20px', marginTop:'10px',color:'red'}}>Node Id:{item.id}</div>
         }
         
       }
       )
      }
    </div>
  )

  }

export default Home