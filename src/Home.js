import Bloglist from './Bloglist';
import useFetch from './usefetch';
const Home = () => {

    // const [name,setName] = useState('Preeti');
    // const [age,setAge] = useState(25);

    // const handleClick = () =>{
    //  setName('Priyanshu');
    //  setAge(30);
    // }

    // const handleClickAgain = (name,e) =>{
    //     console.log('Hello'+ name,e);
    // }


        // ([
    //   {title: 'My new website', body: 'lorem ipsum...',author: 'Preeti',id: 1},
    //   {title: 'Welcome party!', body: 'lorem ipsum...',author: 'Priyanshu',id: 2},
    //   {title: 'Web Dev Tool Tips', body: 'lorem ipsum...',author: 'Mudit',id: 3}
    // ] );

 

    // const [name,setName] = useState('Preeti');

    // const handleDelete = (id)=>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }




    // useEffect(() =>{
    //     // console.log('Use Effect Run');
    //     // console.log(name);

    //     fetch(' http://localhost:8000/blogs')
    //     .then(res=>{
    //         return res.json();
    //     })
    //     .then(data =>{
    //         setBlogs(data)
    //         setIsPending(false)
    //     });
    // },[]);

    const{data: blogs,error,isPending}= useFetch('  http://localhost:8000/blogs');

    return ( 
        <div className="home">

        {/* <h2>HomePage</h2> */}
        {/* <p>{name} is {age} years old</p>
        <button onClick ={handleClick}>Click Me</button> */}
        {/* <button onClick ={  (e) =>handleClickAgain(' Preeti',e.target)}>Click Me again</button> */}

        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}

         {/* {blogs && <Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>} */}
         {blogs && <Bloglist blogs={blogs} title="All Blogs!"/>}
       
        {/* <button onClick={() => setName('Priyanshu')}>Change Name</button> */}
        {/* <p>{name}</p> */}
        
        </div>

     );
}
 
export default Home;
