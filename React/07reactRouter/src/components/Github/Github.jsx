import { useLoaderData } from 'react-router-dom'

export default function Github() {
  const data = useLoaderData()
  console.log(data)

  return (
    <div className='text-center m-4 bg-gray-800 text-white p-6 rounded-lg'>

      <img src={data.avatar_url} alt="Profile" width={150} className='mx-auto rounded-full border-4 border-orange-500' />

      <h1 className='text-3xl mt-4 font-bold'>{data.name} (@{data.login})</h1>

      <p className='text-gray-300 italic'>{data.bio}</p>

      <div className='flex justify-center gap-8 mt-4 text-lg'>
        <span>Repos: {data.public_repos}</span>
        <span>Followers: {data.followers}</span>
        <span>Following: {data.following}</span>
      </div>

      <div className='mt-4 text-xl'>
        <span className='font-semibold'>Hirable: </span>
        <span className={data.hireable ? 'text-green-400' : 'text-red-400'}>
          {data.hireable ? 'Yes, Tushar is hirable' : 'No, Tushar is not hirable'}
        </span>
      </div>

      <div className='mt-4'>
        <a href={data.html_url} target='_blank' rel='noreferrer' className='text-orange-400 underline'>View Profile</a>
      </div>
    </div>
  )
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Pratiksha')
  return response.json()
}
