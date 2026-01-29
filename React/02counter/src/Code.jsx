// import { useNavigate } from "react-router-dom";

// export default function Code() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/");
//   };

//   const Goback = () => {
//     navigate(-1);
//   };

//   const GoHead = () => {
//     navigate(1);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Go to Users</button>
//       <button onClick={Goback}>Go Back</button>
//       <button onClick={GoHead}>Go Forward</button>
//     </div>
//   );
// }

import { useParams, useLocation, useNavigate } from "react-router-dom";

// export default function Code() {
//   const { userId } = useParams(); // URL param
//   const location = useLocation(); // Access location object
//   const navigate = useNavigate();

//   // Parse query params
//   const queryParams = new URLSearchParams(location.search);
//   const baka = queryParams.get("baka");
//   const baka2 = queryParams.get("baka2");
//   // Example of navigation state (optional)
//   const passedData = location.state?.data;

//   return (
//     <div>
//       <h1>Profile Page for User {userId}</h1>
//       {baka === "true" && <p>Showing detailed information</p>}

//       {baka2 === "true" && <p>Showing detailed information</p>}
//       {passedData && <p>Data passed via state: {passedData}</p>}

//       {/* Navigation buttons */}
//       <button onClick={() => navigate(-1)}>Go Back</button>
//       <button onClick={() => navigate(1)}>Go Forward</button>
//     </div>
//   );
// }

// import { useParams } from "react-router-dom";

// export default function Code() {
//   const { userId } = useParams();

//   if (userId) {
//     return (
//       <div>
//         <h1>User Profile</h1>
//         <p>User ID: {userId}</p>
//       </div>
//     );
//   }else{
//     return(
//         <>
//             <h1>this is page code with no query</h1>
//         </>
//     )
//   }
// }

import { useState , useEffect} from "react";

export default function Code() {
  const { userId } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Replace with actual API call
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setProfileData(data))
      .catch((err) => console.error(err));
  }, [userId]);

  if (!profileData) return <p>Loading...</p>;

  return (
    <div>
      <h1>{profileData.name}'s Profile</h1>
      <p>Email: {profileData.email}</p>
      {/* Other profile details */}
    </div>
  );
}
