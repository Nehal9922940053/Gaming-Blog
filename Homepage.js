import React, { useState,useEffect } from 'react'
import BlogList from './BlogList';
import useCustomFetch from './customFetch';
const Homepage=()=> {

{/* let name="Sahil";
const [name,setName] =useState("Sahil")
const [subscribers,setSubs] =useState("10000")

  // const clickHandler=()=>{
  //   console.log("Hello");
  // }

  const clickHandler=(e)=>{
    console.log(e);
    // console.log(e.target);
  }

  const changeName=()=>{
    console.log(name,"name before the set name");
    // name="Nehal";
    setName("Nehal")
    console.log(name,"name after the set name");
    setName("Nehal")
    console.log("Name changed to", name);
  }

  const clickHandlerCustomized=(name)=>{
    console.log("Hello",name);
  }

  const changeSubs=()=>{
    setSubs("550000")
  }

  return (
    <div className='home'>
    <h2>Home Page</h2>
    <p>{name} has {subscribers} subscribers</p>
    <button onClick={clickHandler}>Say Hello </button>
    {/*  <button onClick={clickHandlerCustomized}>Say Hello To</button>
    <button onClick={()=>{
      clickHandlerCustomized("Sahil")
    }}>say Hello to</button>
    <button onClick={changeName}>Click To Change The Name</button>
    <button onClick={changeSubs}>Click To change Subs </button>
    </div>
  )
}*/}


{/*
const [blogs,setBlog]=useState([
  {title:"A",preview:"HI", body:"Hand",author:"Avish",id:"1"},
  {title:"B",preview:"KEY", body:"Eyes",author:"Nehal",id:"2"},
  {title:"C",preview:"LOCK", body:"Ears",author:"Vishal",id:"3"},
  {title:"D",preview:"DOOR", body:"Toes",author:"Sahil",id:"4"},
  {title:"E",preview:"KEY", body:"Eyes",author:"Nehal",id:"5"},
  {title:"F",preview:"LOCK", body:"Ears",author:"Vishal",id:"6"},
  {title:"G",preview:"DOOR", body:"Toes",author:"Sahil",id:"7"},
  {title:"H",preview:"KEY", body:"Eyes",author:"Nehal",id:"8"}
  
]);
*/}


// const [blogs, setBlog] = useState(null);  
// const [isFetchPending, setIsFetchPending] = useState(true);
// const [isError, setIsError] = useState(null);

const {datas, isFetchPending, isError} = useCustomFetch('http://localhost:8000/blogs');







{/*const [blogPreviewGen, setPreview] = useState("This is blog preview content")*/}

// const deleteBlog=(id)=>{
//   const newBlogs=blogs.filter(blogs => blogs.id!==id);
//   setBlog(newBlogs);
// }

// const arraySeries=[1,4,8,16];

// const result =arraySeries.map(x =>x*2);

{/* 
useEffect(
  ()=>
  {console.log("State Change/ Use Effect triggered")},
  [blogPreviewGen]
);
*/}

//stimulating to load data for x miliseconds

// useEffect(()=>{ 
//    setTimeout(
//      () => {
//       fetch('http://localhost:8000/blogss')
//       .then(responses => {
//         console.log(responses);
//         if (!responses.ok) {
//           throw Error("could not fetch data  from the resources!")
//         }
//         return responses.json();
//       })
//       .then(data => {
//         console.log(data);
//         setBlog(data);
//         setIsFetchPending(false); 
//         setIsError(null);
//         })
//         .catch(
//           err =>{
//             setIsFetchPending(false);
//           setIsError(err.message);
//           console.log(err.message);
//       })
//      },2000)
//   },
//   []
// );

return (
  <div className="home">
  {/* 
<BlogList blogs={blogs} title="All Gamin Blogs"/>

<BlogList blogs={blogs.filter((blog) => blog.author ==='Nehal')} title="Nehal's Gamin Blogs" />

<BlogList blogs={blogs.filter((blog) => blog.author ==='Sahil')} title="Sahil's Gamin Blogs"/>

<BlogList blogs={blogs} title="Gaming Blogs" deleteBlog={deleteBlog}/>*/}


{/* Conditional Templating  for Error*/}

{isError && <div>{isError}</div>}


{/* Conditional Templating  for for fetch status*/}

{isFetchPending && <div>Data is Loading.....</div>}




{/* Conditional Templating  for bloglist*/}

{/* {blogs && <BlogList blogs={blogs} title="Gaming Blogs" deleteBlog={deleteBlog}/>}*/}

{datas && <BlogList blogs={datas} title="Gaming Blogs"/>}

{/*<p>{blogPreviewGen}</p>

<button onClick={() => setPreview("updated Preview")}>Change The Preview Text</button>*/}
</div>
 
);
}






export default Homepage;
