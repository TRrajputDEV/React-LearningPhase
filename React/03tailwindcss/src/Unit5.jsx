import { useEffect, useId, useState } from "react";
import axios from "axios";
// export default function Unit5(){
//     return(
//         <>
//             <p>This is Unit 5. </p>
//         </>
//     )
// }

/* 
------------------------------Unit 5----------------------------------

PART 1 :HTTP METHODS
    1. GET Requests - Fetching Data. 


*/

/*
****************************** Part 1**************************************

GET Requests - Fetching Data

useeffect + Fetch/Axios. 

*/
// --------------------GET With Fetch---------------------------------
/*
export default function Unit5() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch once the data - we have given the empty dependency Array.
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json()) // parse into JSON.
      .then((res) => {
        setData(res.slice(0, 5));// update the state.
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error:{error} </p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
*/

//-----------------------GET with AXios-----------------------------

/*
export default function Unit5() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((Response) => {
        setData(Response.data); // data is already paresed here.....
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error} </p>;
  }

  return (
    <ul>
      {data.map(post => 
        <li key={post.id}>
          {post.id}
          {post.title}
        </li>
      )}
    </ul>
  );
}
*/

// ------------------------Async Await---------------------------------
/*
export default function Unit5() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users?_limit=9"
        );

        // Check if request was successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      } finally {
        setLoading(false); // Always runs, even if error
      }
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          {post.id}
          {post.title}
        </li>
      ))}
    </ul>
  );
}
*/

/*
*****************************PART B - POST Request*****************************

    -> three thing 
        1. POST with Fetch API
        2. POST with Axios
        3. POST with Async/await
     
        

    1. 
    // POST Request from teacher's notes
    const addItem = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',  // Specify POST method
    headers: {'Content-Type': 'application/json'},  // Tell server we're sending JSON
    body: JSON.stringify({ title: input, body: 'Sample body', userId: 1 }),  // Convert object to JSON string
  })
    .then(res => res.json())
    .then(newItem => setData([newItem, ...data]))  // Add new item to start of array
    .catch(err => console.error('POST Error:', err));
};
    2.
    // POST Request with Axios (teacher's code)
    const addItem = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: input,
    body: 'Sample body',
    userId: 1,
    })
    .then(response => setData([response.data, ...data]))  // Data already parsed!
    .catch(error => console.error('POST Error:', error));
};

*/

//------------------FULL WORKING EXAMPLE OF POST --------------------------

// export default function Unit5() {
//   const [formData, setFormData] = useState({
//     title: "",
//     body: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResult(null);

//     try {
//       const response = await axios.post(
//         "https://jsonplaceholder.typicode.com/posts",
//         {
//           title: formData.title,
//           body: formData.body,
//           userId: 1,
//         }
//       );

//       console.log("Response: ", response.data);
//       setResult({ success: true, data: response.data });

//       setFormData({ title: "", body: "" });
//     } catch (error) {
//       console.error("Error:", error);
//       setResult({ success: false, error: error.message });
//     } finally{
//         setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Axios Post Example</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           placeholder="Enter the title"
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="body"
//           id="body"
//           value={formData.body}
//           onChange={handleChange}
//           placeholder="Post body"
//           rows="4"
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "sunmitting....." : "Submit Post"}
//         </button>
//       </form>

//       {/* Show Result */}
//       {result && (
//         <div
//           style={{
//             marginTop: "20px",
//             padding: "15px",
//             background: result.success ? "#d4edda" : "#f8d7da",
//           }}
//         >
//           {result.success ? (
//             <div>
//               <h3>✅ Post Created!</h3>
//               <p>ID: {result.data.id}</p>
//               <p>Title: {result.data.title}</p>
//             </div>
//           ) : (
//             <div>
//               <h3>❌ Error</h3>
//               <p>{result.error}</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// --------------------------Example 2: Ajeeb sa Example hai pta ni------------
// This example seems Fire---->
// export default function Unit5() {
//   const [posts, setPosts] = useState([]);
//   const [newTitle, setNewTitle] = useState("");
//   const [loading, setLoading] = useState(false);

//   // GET existing posts on mount
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error(err));
//   }, []);

//   // POST new post
//   const addPost = async () => {
//     if (!newTitle.trim()) {
//       alert("Please enter a title");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             title: newTitle,
//             body: "This is a new post",
//             userId: 1,
//           }),
//         }
//       );

//       const newPost = await response.json();

//       // Add new post to TOP of list [web:104]
//       setPosts([newPost, ...posts]);

//       // Clear input
//       setNewTitle("");

//       alert("Post added successfully!");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to add post");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Add Post to List</h2>

//       {/* Add New Post */}
//       <div
//         style={{ marginBottom: "20px", padding: "15px", background: "#f5f5f5" }}
//       >
//         <input
//           type="text"
//           value={newTitle}
//           onChange={(e) => setNewTitle(e.target.value)}
//           placeholder="Enter post title"
//           style={{ padding: "10px", width: "300px", marginRight: "10px" }}
//         />
//         <button
//           onClick={addPost}
//           disabled={loading}
//           style={{ padding: "10px 20px" }}
//         >
//           {loading ? "Adding..." : "Add Post"}
//         </button>
//       </div>

//       {/* Display Posts */}
//       <h3>Posts ({posts.length})</h3>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {posts.map((post) => (
//           <li
//             key={post.id}
//             style={{
//               padding: "15px",
//               marginBottom: "10px",
//               background: "#fff",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//             }}
//           >
//             <strong>{post.title}</strong>
//             <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
//               ID: {post.id} | User: {post.userId}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

/*
**********************************PART 3 - PUT AND DELETE************************

PART 1: Complete PUT
*/

// export default function Unit5() {
//   const [posts, setPosts] = useState([]);
//   const [editId, setEditId] = useState(null); // Track which item is being edited
//   const [editTitle, setEditTitle] = useState("");
//   const [loading, setLoading] = useState(false);

//   // GET posts on mount
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error(err));
//   }, []);

//   // Start editing - populate input with current title
//   const startEdit = (post) => {
//     setEditId(post.id);
//     setEditTitle(post.title);
//   };

//   // Cancel editing
//   const cancelEdit = () => {
//     setEditId(null);
//     setEditTitle("");
//   };

//   // PUT request to update
//   const updatePost = async () => {
//     setLoading(true);

//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${editId}`, // URL includes ID
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             id: editId,
//             title: editTitle,
//             body: "Updated content",
//             userId: 1,
//           }),
//         }
//       );

//       const updatedPost = await response.json();
//       console.log("Updated:", updatedPost);

//       // Update state - replace the old post with updated one [web:113][web:117]
//       setPosts(posts.map((post) => (post.id === editId ? updatedPost : post)));

//       // Exit edit mode
//       setEditId(null);
//       setEditTitle("");

//       alert("Post updated successfully!");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Update failed!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Update Posts (PUT Request)</h2>

//       {/* Edit Form (only shows when editing) */}
//       {editId && (
//         <div
//           style={{
//             padding: "20px",
//             background: "#f0f8ff",
//             marginBottom: "20px",
//             border: "2px solid #4CAF50",
//             borderRadius: "5px",
//           }}
//         >
//           <h3>Editing Post ID: {editId}</h3>
//           <input
//             type="text"
//             value={editTitle}
//             onChange={(e) => setEditTitle(e.target.value)}
//             placeholder="Edit title"
//             style={{
//               width: "400px",
//               padding: "10px",
//               marginRight: "10px",
//             }}
//           />
//           <button
//             onClick={updatePost}
//             disabled={loading}
//             style={{ padding: "10px 20px", marginRight: "10px" }}
//           >
//             {loading ? "Updating..." : "Save Changes"}
//           </button>
//           <button onClick={cancelEdit} style={{ padding: "10px 20px" }}>
//             Cancel
//           </button>
//         </div>
//       )}

//       {/* Posts List */}
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {posts.map((post) => (
//           <li
//             key={post.id}
//             style={{
//               padding: "15px",
//               marginBottom: "10px",
//               background: editId === post.id ? "#ffe6e6" : "#fff",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//             }}
//           >
//             <div>
//               <strong>{post.title}</strong>
//               <div style={{ fontSize: "12px", color: "#666" }}>
//                 ID: {post.id}
//               </div>
//             </div>
//             <button
//               onClick={() => startEdit(post)}
//               disabled={editId !== null} // Disable while editing another
//               style={{
//                 marginTop: "10px",
//                 padding: "8px 15px",
//                 background: "#2196F3",
//                 color: "white",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               Edit
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
