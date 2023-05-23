export const badbeesh = {
  title: 'Badbeesh - Habit Tracker',
  subtitle: 'Vue3, TailwindCSS, DaisyUI, Netlify, Static Site, Localstorage',
  link: 'https://badbeesh.netlify.app',
  image_thumb: 'https://placehold.co/600x400',
  notes: `
    <h3>Problem Definition</h3>
    <p>A portfolio that can easily be updated with Projects, Experience, Company worked for, title, and job details in list format. It will have a simple login system. It will have a straight forward design and layout.</p>

    <h3>Requirements</h3>
    <ul>
      <li>R1. Admin can create, update, delete a project</li>
      <li>R2. Admin can create, update, delete an experience</li>
      <li>R3. A Project will consist of Title, Link, and Image</li>
      <li>R4. An experience will consist of Company, Job title, and Job description and list</li>
      <li>R5. Admin can update an experience’s content (company, job title, job description and list)</li>
      <li>R6. Admin can login</li>
      <li>R7. All data will be displayed as public</li>
      <li>R8. User can change public display of content by DSA data visualization</li>
      <li>R9. User can view Project Notes</li>
    </ul>

    <h3>Guess a “Design approach” and “Design Pattern”</h3>
    <p>I’ll approach it bottom-up. Focusing and building its small components first. Design pattern is unknown yet. It’s difficult for me to guess. I’ll need to familiarize myself with different design patterns.</p>

    <h3>Determine Actors (Primary, Secondary) and its Use Cases.</h3>
    <p>
      - Primary are humans or external systems that interact with the system.<br>
      - Secondary are the ones used by the system to assist Primary actors in a use case.
    </p>

    <h4>Primary actors:</h4>
    <ul>
      <li>
        <i>Admin</i>
        <ul>
          <li>Create a project</li>
          <li>Update a project</li>
          <li>Delete a project</li>
          <li>Create an experience</li>
          <li>Update an experience</li>
          <li>Delete an experience</li>
          <li>Login into system</li>
        </ul>
      </li>
      <li>
        <i>User</i>
        <ul>
          <li>View all contents</li>
          <li>Can click on a project title or image</li>
          <li>Can switch display of content by variety DSA data visualization</li>
          <li>Can view Notes associated with a Project</li>
        </ul>
      </li>
    </ul>

    <h4>Secondary actors:</h4>
    <ul>
      <li>
        <i>System</i>
        <ul>
          <li>Store Project’s content (Title, Link, Image)</li>
          <li>Store Experience content (Company, Job Title, Job description, Job List)</li>
        </ul>
      </li>
    </ul>
  `,
  images: [
    'portfolio.png'
  ]
}