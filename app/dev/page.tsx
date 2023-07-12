export async function getUserData(){
  const userApiURL = `${process.env.BASE_URL}/api/users`;
  const projectApiURL = `${process.env.BASE_URL}/api/projects`;
  const users = await fetch(userApiURL).then((res) => res.json())
  const projects = await fetch(projectApiURL).then((res) => res.json())

  const userData = users.map((user: any) => {
    const userProjects = projects.filter((project: any) => project.createdById === user.id);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      projects: userProjects
    };
  });

  return userData;
}


export default async function Dev() {
  const users = await getUserData()
  console.log(users)
  return (
    <main>
      <h1 className="font-bold">users</h1>
      <ul>
        {users.map((user:any) => (
          <>
          <li key={user.id}>{user.name}</li>
          <li key={user.email}>{user.email}</li>
          <ul>
              {user.projects.map((project: any) => (
                <li key={project.id}>
                  <p>Project ID: {project.id}</p>
                  <p>Project Name: {project.name}</p>
                  {/* Render other project properties here */}
                </li>
              ))}
            </ul>
          </>
        ))}
      </ul>
    </main>
  );
}